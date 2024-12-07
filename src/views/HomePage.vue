<template>
  <div class="text-center mt-15 mb-15 homePage">
    <v-container class="third rounded">
      <v-row>
        <v-col
            cols="12"
            xs="6"
            sm="5"
            md="4"
        >
          <SideBar/>
        </v-col>
        <v-col
            class="about"
            cols="12"
            xs="6"
            sm="7"
            md="8">
          <AboutComponent/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import SideBar from "@/components/SideBar.vue";
import AboutComponent from "@/components/AboutComponent.vue";

export default {
  name: 'HomeView',
  components: {AboutComponent, SideBar},
  methods: {}

}
</script>
<style scoped>

.about {
  text-align: justify;
}

.lineHeight {
  line-height: 1.2 !important;
}

.darkLinks {
  color: #FFFBF5 !important;
}
</style>
