<template>
    <v-app-bar
        app
        class="primary"
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
            i18n.locale = this.selectedLang
            this.$vuetify.rtl = !this.$vuetify.rtl
        },
        goto(routeName) {
            if (this.$route.name !== 'home') {
                this.$router.push(routeName)
            }
        },
        toggleDarkMode: function () {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            this.darkMode = !this.darkMode;
        }
    }
}
</script>

<style scoped>
.logo {
    cursor: pointer;
}

.logo a {
    color: #d1e7ff;
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