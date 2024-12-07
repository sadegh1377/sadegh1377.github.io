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
          <v-card
              class="pa-4 rounded"
              outlined
              tile>
            <p class="body-1">
              {{ $t("homePage.about") }}</p>
            <b>{{ $t("homePage.workExperienceTitle") }}</b>
            <p class="body-2 ">
              <span class="font-weight-bold">{{ $t("homePage.freelance") }}</span>
              <br>
              <span class="font-italic">
                            {{ $t("homePage.secondFreeLanceDuration") }}
                            </span>
            </p>
            <ul class="px-5 mb-3 body-2">
              <li  v-for="(detail, index) in $t('homePage.secondFreelanceDetail')" :key="index" v-html="detail">
              </li>
            </ul>
            <p class="body-2">
              <span class="font-weight-bold">{{ $t("homePage.frontDeveloper") }}</span>
              <br>
              <span v-html="$t('homePage.filioSummary')"></span>
              <br>
              <span class="font-italic">
                            {{ $t("homePage.filioDuration") }}
                            </span>
            </p>
            <ul class="px-5 mb-3 body-2">
              <li v-for="(detail, index) in $t('homePage.filioDetail')" :key="index">{{ detail }}</li>
            </ul>
            <p class="body-2 ">
              <span class="font-weight-bold">{{ $t("homePage.freelance") }}</span>
              <br>
              <span class="font-italic">
                            {{ $t("homePage.firstFreeLanceDuration") }}
                            </span>
            </p>
            <ul class="px-5 mb-3 body-2" v-for="(detail, index) in $t('homePage.fistFreelanceDetail')" :key="index">
              <li v-html="detail">
              </li>
            </ul>
            <p class="body-2 ">
              <span class="font-weight-bold">{{ $t("homePage.juniorTitle") }}</span>
              <br>
              {{ $t("homePage.superzSummary") }}
              <br>
              <span class="font-italic">
                            {{ $t("homePage.superzDuration") }}
                            </span>
            </p>
            <ul class="px-5 mb-3 body-2">
              <li v-for="(detail, index) in $t('homePage.superzDetail')" :key="index">{{detail}}</li>
            </ul>
            <p class="body-2 ">
              <span class="font-weight-bold">{{$t('homePage.internTitle')}}</span>
              <br>
              {{ $t("homePage.superzSummary") }}
              <br>
              <span class="font-italic">
                           {{$t("homePage.internDuration")}}
                            </span>
            </p>
              <ul class="px-5 body-2">
                <li v-for="(detail, index) in $t('homePage.internDetail')" :key="index">{{detail}}</li>
              </ul>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import SideBar from "@/components/SideBar.vue";

export default {
  name: 'HomeView',
  components: {SideBar},
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
