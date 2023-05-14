<template>
  <v-app-bar
      app
      color="primary"
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
    <v-select
        class="select mr-2"
        v-model="selectedLang"
        @change="changeLocale"
        :items="languages"
    ></v-select>
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
      languages: ['en', 'fa']
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
</style>