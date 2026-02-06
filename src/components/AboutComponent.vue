<script>
export default {
  data() {
    return {
      totalYears: 0,
      totalMonths: 0,
    }
  },
  methods: {
    calculateDurations() {
      const start = new Date(2025, 0); // 1/2025
      const end = new Date();

      // Calculate years, months, days
      let years = end.getFullYear() - start.getFullYear();
      let months = end.getMonth() - start.getMonth();

      if (months < 0) {
        years--;
        months += 12;
      }

      if (this.$i18n.locale === "fa") {
        this.totalYears = years.toString().replace(/[0-9]/g, (digit) => {
          return String.fromCharCode(digit.charCodeAt(0) + 1728);
        });
        this.totalMonths = months.toString().replace(/[0-9]/g, (digit) => {
          return String.fromCharCode(digit.charCodeAt(0) + 1728);
        });
      } else {
        this.totalYears = years;
        this.totalMonths = months;
      }

    },
  },
  updated() {
    this.calculateDurations();
  },
  created() {
    this.calculateDurations();
  }
}
</script>

<template>
  <v-card
      class="pa-4 rounded"
      outlined
      tile>
    <p class="body-1">
      {{ $t("homePage.about") }}</p>
    <b>{{ $t("homePage.workExperienceTitle") }}</b>
    <!--  Simager  -->
    <div class="body-2 mb-4">
      <span class="font-weight-bold">{{ $t("homePage.frontDeveloper") }}</span>
      <br>
      <span v-html="$t('homePage.simagarSummary')"></span>
      <br>
      <div class="font-italic">
                            {{ $t("homePage.simagarDuration") }}
        <!--        <span>({{ totalYears === 0 ? '' : `${totalYears} years ` }} {{ totalMonths }} mos)</span>-->
        <div  class="d-inline">(</div>
        <span v-if="totalYears !== 0 && totalYears !== '۰'">{{ totalYears }} {{ $t("homePage.years") }}</span>
        <span v-if="totalMonths !== 0 && totalMonths !== '۰'">{{ totalMonths }} {{ $t("homePage.mounts") }}</span>
        <span>)</span>
                            </div>
    </div>
    <!--  second Free lance  -->
    <p class="body-2 ">
      <span class="font-weight-bold">{{ $t("homePage.freelance") }}</span>
      <br>
      <span class="font-italic">
                            {{ $t("homePage.secondFreeLanceDuration") }}
                            </span>
    </p>
    <ul class="px-5 mb-3 body-2">
      <li v-for="(detail, index) in $t('homePage.secondFreelanceDetail')" :key="index" v-html="detail">
      </li>
    </ul>
    <!--  Filio  -->
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
    <!--  First Free lance  -->
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
    <!--  Superz  -->
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
      <li v-for="(detail, index) in $t('homePage.superzDetail')" :key="index">{{ detail }}</li>
    </ul>
    <p class="body-2 ">
      <span class="font-weight-bold">{{ $t('homePage.internTitle') }}</span>
      <br>
      {{ $t("homePage.superzSummary") }}
      <br>
      <span class="font-italic">
                           {{ $t("homePage.internDuration") }}
                            </span>
    </p>
    <ul class="px-5 body-2">
      <li v-for="(detail, index) in $t('homePage.internDetail')" :key="index">{{ detail }}</li>
    </ul>
  </v-card>
</template>

<style scoped>

</style>