import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    app: {
        head: {
            title: 'Mohammad Sadegh Hadipour – Frontend Developer',
            meta: [
                {name: 'description', content: 'Portfolio of Mohammad Sadegh Hadipour, a Vue/Nuxt frontend developer.'},
                {name: 'theme-color', content: '#0B0D12'}
            ],
            link: [
                {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
                {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
                {
                    href: 'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..800&family=JetBrains+Mono:wght@400..600&display=swap',
                    rel: 'stylesheet'
                }
            ]
        }
    },

    future: {
        compatibilityVersion: 4,
    },
    modules: [
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
    ],
    i18n: {
        strategy: 'prefix_except_default',
        locales: [
            {code: 'fa', iso: 'fa-IR', name: 'Persian', file: 'fa.json', dir: "rtl",},
            {code: 'en', iso: 'en-US', name: 'English', file: 'en.json', dir: "ltr",},
        ],
        defaultLocale: 'fa',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        },
    },
    vite: {
        build: {
            cssCodeSplit: false,
        },

        plugins: [
            tailwindcss(),
        ],
    },
    css: ['~/assets/css/main.css'],
    devServer: {
        port: 3003
    },
})