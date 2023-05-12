<template>
  <div class="ma-15 d-flex flex-row flex-wrap justify-center">
    <v-hover v-slot="{ hover }" class="hover mr-5 mb-5" v-for="i in 30" :key="i">
      <v-card
          class=""
          color="grey lighten-4"
      >
        <v-img
            a
            class="img"
            src="https://raw.githubusercontent.com/sadegh1377/selectUnit/master/screenshots/newSelect.png"
        >
          <v-expand-transition>
            <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal text-h2 white--text"
                style="height: 100%;"
            >
              $14.99
            </div>
          </v-expand-transition>
        </v-img>
      </v-card>
    </v-hover>

  </div>
</template>

<script>
export default {
  name: "ProjectsPage"
}
</script>
<style scoped>
.img {
  margin: 0 auto;
  width: 300px;
  height: 300px;
  aspect-ratio: auto 100/100;
}

.hover {
  width: 300px;
  height: 300px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>