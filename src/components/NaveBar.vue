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
export default {
  name: "NaveBar",
  methods: {
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
</style>