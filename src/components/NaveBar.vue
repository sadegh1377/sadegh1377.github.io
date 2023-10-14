<template>
    <v-app-bar
        app
        class="navbar"
        dark
    >
        <div class="d-flex align-center">
            <v-img
                @click="goto('/')"
                alt="Vuetify Logo"
                class="shrink mr-2 logo"
                contain
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                transition="scale-transition"
                width="40"
            />
            <h1 class="logo">
                <router-link to="/">MSH</router-link>
            </h1>
        </div>

        <v-spacer></v-spacer>
        <v-switch
            dense
            class=" mr-5 my-auto"
            color="white"
            :value="darkMode"
            @change="toggleDarkMode"
            :label="`${switchLabel}`"
        ></v-switch>
        <v-select
            color="secondary"
            class="select mr-2"
            v-model="selectedLang"
            @change="changeLocale"
            :items="languages"
        >
            <template #item="{item}">
                <span :class="{'darkMode':darkMode}">{{ item }}</span>
            </template>
        </v-select>
        <!--    <v-btn-->
        <!--        color="#d1e7ff"-->
        <!--        depressed-->
        <!--        outlined-->
        <!--        rounded-->
        <!--        to="/projects-page"-->
        <!--    >-->
        <!--      Projects-->
        <!--    </v-btn>-->
    </v-app-bar>
</template>

<script>
import i18n from "@/i18n";

export default {
    name: "NaveBar",
    data() {
        return {
            selectedLang: i18n.locale,
            languages: ['en', 'fa'],
            darkMode: false
        }
    },
    computed: {
        switchLabel: function () {
            if (this.$i18n.locale === "fa") {
                return this.darkMode ? 'حالت روشن' : 'حالت تاریک';
            } else {
                return this.darkMode ? 'light mode' : 'dark mode';
            }

        }
    },
    methods: {
        changeLocale() {
            if (i18n.locale === 'en') {
                localStorage.removeItem('lang')
                localStorage.setItem("lang", 'fa')
                i18n.locale = 'fa'
                this.selectedLang = 'fa'
            } else {
                localStorage.removeItem('lang')
                localStorage.setItem("lang", 'en')
                i18n.locale = 'en'
                this.selectedLang = 'en'
            }
            this.$vuetify.rtl = !this.$vuetify.rtl
        },
        goto(routeName) {
            if (this.$route.name !== 'home') {
                this.$router.push(routeName)
            }
        },
        toggleDarkMode: function () {

            if (this.$vuetify.theme.dark) {
                this.$vuetify.theme.dark = false
                // localStorage.removeItem('theme')
                // localStorage.setItem("theme", 'lightMode')
                this.darkMode = false;
            } else {
                this.$vuetify.theme.dark = true
                // localStorage.removeItem('theme')
                // localStorage.setItem("theme", 'darkMode')
                this.darkMode = true;
            }
        }
    },
    created() {
        let lang = localStorage.getItem("lang");
        // let theme = localStorage.getItem("theme")
        if (lang) {
            if (lang === 'fa') {
                this.selectedLang = 'fa'
                this.$vuetify.rtl = true
            } else {
                this.selectedLang = 'en'
                this.$vuetify.rtl = false
            }
            i18n.locale = lang
        }
        // if (theme){
        //     if (theme === 'darkMode'){
        //         this.$vuetify.theme.dark = true
        //         this.darkMode = true;
        //     }else {
        //         this.$vuetify.theme.dark = false
        //         this.darkMode = false;
        //     }
        // }
    }
}
</script>

<style scoped>
.logo {
    cursor: pointer;
}

.logo a {
    color: #FFFBF5;
    text-decoration: none;
}

.select {
    max-width: 80px;
    max-height: 80px;
    font-size: 15px;
    font-weight: bold;
    color: #d1e7ff;
}

.v-application .primary--text {
    color: white !important;
    background-color: red !important;
}

.darkMode {
    color: white !important;
}
</style>