<template>
  <div class="text-center mt-15 homePage">
    <img class="profileImage elevation-7" src="../assets/profilePhoto.jpg" alt="Profile Image">
    <v-card-title class="justify-center">
      {{ $t('homePage.name') }}
    </v-card-title>
    <v-card-subtitle class="">{{ $t('homePage.occupation') }}</v-card-subtitle>
    <v-card class="mt-1 mb-16 about elevation-10">
      <v-card-text class="text-h6 text-center" v-html="$t('homePage.about')">

      </v-card-text>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  methods: {}

}
</script>
<style scoped>
.profileImage {
  display: inline-block;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 50%;
  aspect-ratio: auto 100 / 100;
}

.about {
  margin-left: 150px;
  margin-right: 150px;
}

span {
  color: #1976d2;
  font-weight: bold;
}

.lineHeight {
  line-height: 1.2 !important;
}

@media only screen and (max-width: 600px) {
  .about {
    margin-left: 100px;
    margin-right: 100px;
  }
}

@media only screen and (max-width: 400px) {
  .about {
    margin-left: 50px;
    margin-right: 50px;
  }
}
</style>
