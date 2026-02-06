<script setup>

</script>

<template>
  <v-card
      class="pa-2 rounded"
      outlined
      tile>
    <img class="profileImage elevation-5" src="../assets/profilePhoto.jpg" alt="Profile Image">
    <v-card-title class="justify-center pt-2">
      {{ $t('homePage.name') }}
    </v-card-title>
    <v-card-subtitle class="pb-0">{{ $t('homePage.occupation') }}
    </v-card-subtitle>
    <v-card-subtitle class="pt-0 body-2">
      {{ $t('homePage.location') }}
    </v-card-subtitle>
    <v-card-text class="body-1 summary" v-html="$t('homePage.summary')">
    </v-card-text>
    <v-card-title class="" style="text-align: left">
      {{ $t("homePage.skillsTitle") }}
    </v-card-title>
    <v-card-text style="text-align: left" class="d-flex justify-start ">
      <ul>
        <li class="body-1">JavaScript</li>
        <li class="body-1">VueJs</li>
        <li class="body-1">VueRouter</li>
        <li class="body-1">VuetifyJs</li>
        <li class="body-1">Quasar</li>
        <li class="body-1">NuxtJs</li>
        <li class="body-1">Angular</li>
        <li class="body-1">React</li>
        <li class="body-1">HTML</li>
        <li class="body-1">CSS</li>
        <li class="body-1">Bootstrap</li>
        <li class="body-1">TailWindCss</li>
        <li class="body-1">Figma</li>
      </ul>
      <ul>
        <li class="body-1">NodeJs</li>
        <li class="body-1">ExpressJs</li>
        <li class="body-1">MongoDB</li>
        <li class="body-1">Mongoose</li>
        <li class="body-1">Firebase</li>
        <li class="body-1">ChartJs</li>
        <li class="body-1">Git</li>
        <li class="body-1">i18n</li>
      </ul>
    </v-card-text>
    <v-card-title class="" style="text-align: left">
      {{ $t("homePage.otherSkillsTitle") }}
    </v-card-title>
    <v-card-text :class="{'text-left': $i18n.locale === 'en','text-right': $i18n.locale === 'fa'}"
                 v-html="$t('homePage.otherSkills')">
    </v-card-text>
    <v-card-title class="" style="text-align: left">
      {{ $t("homePage.projectsTitle") }}
    </v-card-title>
    <v-card-text>
      <ul>
        <li><a href="https://github.com/sadegh1377/news-client" target="_blank">news-client</a>
        </li>
        <li><a href="https://github.com/sadegh1377/ecommProject"
               target="_blank">ecommProject</a>
        </li>
        <li><a href="https://github.com/sadegh1377/movie-details"
               target="_blank">movie-details</a>
        </li>
      </ul>
    </v-card-text>
    <v-card-title class="" style="text-align: left">
      {{ $t("homePage.educationHistoryTitle") }}
    </v-card-title>
    <v-card-text :class="{'text-left': $i18n.locale === 'en','text-right': $i18n.locale === 'fa'}"
                 v-html="$t('homePage.educationHistory')">

    </v-card-text>
    <v-card-actions>
      <a href="https://github.com/sadegh1377" target="_blank"
         title="GitHub">
        <v-icon class="mr-2">mdi-github</v-icon>
      </a>
      <a href="https://www.linkedin.com/in/sadegh-hadipour-b3b62a192/" target="_blank"
         title="Linkedin">
        <v-icon class="mr-2">mdi-linkedin</v-icon>
      </a>
      <v-icon :class="{'mr-2': $i18n.locale === 'fa'}" title="Phone Number">mdi-phone</v-icon>
      <span class="body-1">{{ $t("homePage.phoneNumber") }}</span>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

.profileImage {
  display: inline-block;
  margin: 0 auto;
  width: 180px;
  height: 180px;
  border: 1px solid gray;
  border-radius: 50% !important;
  aspect-ratio: auto 100 / 100;
}

.summary {
  text-align: justify;
  line-height: 20px;
}

li {
  text-align: justify;
}

</style>