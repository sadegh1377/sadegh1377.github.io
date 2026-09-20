export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {name, email, message} = body

    if (!name || !email || !message) {
        throw createError({statusCode: 400, statusMessage: 'Please fill out this field.'})
    }

    const config = useRuntimeConfig()
    const token = config.telegramBotToken
    const chatId = config.telegramChatId

    const text = `📩 پیام جدید از پورتفولیو

👤 نام: ${name}
✉️ ایمیل: ${email}
📝 پیام:
${message}`

    const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            chat_id: chatId,
            text,
        }),
    })

    if (!telegramRes.ok) {
        throw createError({statusCode: 500, statusMessage: 'Something went wrong'})
    }

    return {success: true}
})