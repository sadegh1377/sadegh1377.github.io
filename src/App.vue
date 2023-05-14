<template>
  <v-app>
    <NaveBar/>
    <v-main class="main">
      <router-view/>
    </v-main>
    <SemiFooter/>
  </v-app>
</template>

<script>

import NaveBar from "@/components/NaveBar";
import SemiFooter from "@/components/SemiFooter";

export default {
  name: 'App',
  components: {SemiFooter, NaveBar},
  data: () => ({
    //
  }),
};
</script>
<style>
@font-face {
  font-family: "iranSans";
  src: local("iranSans"),
  url(assets/font/FontsFree-Net-ir_sans.ttf) format("truetype");
}

.main {
  font-family: iranSans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f1f1f1;
}
</style>
