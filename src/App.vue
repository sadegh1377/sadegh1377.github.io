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
.main{
  background-color: #f1f1f1;
}
</style>
