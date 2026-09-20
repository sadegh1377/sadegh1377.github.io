export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {name, email, message} = body

    if (!name || !email || !message) {
        throw createError({statusCode: 400, statusMessage: 'Please fill out this field.'})
    }

    const config = useRuntimeConfig()
    const telegramToken = config.telegramBotToken
    const telegramChatId = config.telegramChatId

    const baleToken = config.baleBotToken
    const baleChatId = config.baleChatId

    const text = `📩 پیام جدید از پورتفولیو

👤 نام: ${name}
✉️ ایمیل: ${email}
📝 پیام:
${message}`

    const sendToTelegram = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            chat_id: telegramChatId,
            text,
        }),
    })

    const sendToBale = fetch(
        `https://tapi.bale.ai/bot${baleToken}/sendMessage`,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({chat_id: baleChatId, text}),
        }
    )

    const results = await Promise.allSettled([sendToTelegram, sendToBale])

    const failed = []
    for (const [i, result] of results.entries()) {
        const platform = i === 0 ? 'Telegram' : 'Bale'
        if (result.status === 'rejected' || !result.value.ok) {
            failed.push(platform)
        }
    }

    // اگه هر دو شکست خوردن، خطا بده
    if (failed.length === results.length) {
        throw createError({statusCode: 500, statusMessage: 'something went wrong.'})
    }

    return {success: true, failed}
})