<script setup>

</script>

<template>
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
</template>

<style scoped>

</style>