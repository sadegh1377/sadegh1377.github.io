export const useProjects = () => {
    const projects = [
        {
            id: 1,
            title: 'RayaLingo',
            description: 'AI‑powered language learning platform with real‑time chat, leaderboards, and admin content workflow.',
            tags: ['Vue 3', 'Nuxt', 'WebSockets', 'Vuetify', 'AI'],
            link: 'https://rayalingo.com/'
        },
        {
            id: 2,
            title: 'Taraz',
            description: 'Laboratory appointment & reservation system with dual‑role (patient/lab) interface and dynamic scheduling.',
            tags: ['Vue', 'Nuxt', 'Pinia', 'Vuetify', 'Role-based UI'],
            link: 'https://tarazhub.com/'
        },
        {
            id: 3,
            title: 'GTPart',
            description: 'Scalable e‑commerce platform with variant handling, advanced filtering, and admin dashboard.',
            tags: ['Vue', 'Nuxt', 'TypeScript', 'Vuetify', 'Performance'],
            link: 'https://gtpart.app/'
        },
        {
            id: 4,
            title: 'Zehn Araei',
            description: 'Hybrid digital commerce for online courses and book sales with secure purchase flows.',
            tags: ['Vue', 'Payment Integration', 'BootstrapVue', 'Content Management'],
            link: 'https://www.zehnaraei.com/'
        },
        {
            id: 5,
            title: 'Halam Khoobee',
            description: 'Wellness platform – enhanced performance, real‑time messaging, and admin media tools.',
            tags: ['Nuxt', 'WebSockets', 'Media Upload' ,'BootstrapVue'],
            link: 'https://halamkhoobee.com/'
        },
        {
            id: 6,
            title: 'Tehran Katani',
            description: 'E‑commerce storefront – rebuilt cart, variant galleries, stock management, and analytics dashboards.',
            tags: ['Vue', 'Nuxt', 'TypeScript', 'Vuetify', 'Performance'],
            link: 'https://www.tehrankatani.com/'
        }
    ]

    return { projects }
}