<template>
  <div class="text-center mt-15 homePage">
    <img class="profileImage elevation-7" src="../assets/profilePhoto.jpg" alt="Profile Image">
    <v-card-title class="justify-center">
      M.Sadegh Hadipour
    </v-card-title>
    <v-card-subtitle class="">FrontEnd Developer</v-card-subtitle>
    <v-card class="mt-1 mb-16 about elevation-10">
      <v-card-text class="text-h6 text-center">
        I am a front-end developer with over 4 years of experience in the technology industry.
        I have actively <br> participated in developing web user interfaces for various users.
        To achieve the goals of clients, <br>I work with
        <b><a href="https://developer.mozilla.org/en-US/" target="_blank">HTML/CSS/JS</a></b>,
        <b><a href="https://vuejs.org/" target="_blank">Vue.js</a></b>,
        and <b><a href="https://angular.io/" target="_blank">Angular</a></b>.
        <br>
        I enjoy designing user interfaces and am looking for an opportunity to work in a company that <br>seeks to
        further develop the user interface. I appreciate individuals who are active in the <br> technology industry and
        can help me present the best possible user interface to my employers.
        <br>
        <br>
        <h3>Work Experience: </h3>
        <h5>Front-end Developer - Company Filio - 21.1.2022 to 23.8.2022</h5>
        <div class="lineHeight text-body-1">
          <span>1.</span> Programmed with Vue and quasar to build the Google Map Layer section of the
          application.
          <br>
          <span>2.</span> Implemented user interfaces (UI) using HTML/CSS/JS.
          <br>
          <span>3.</span> Implemented user interfaces with Vue.js.
          <br>
          <span>4.</span> Executed design layouts with a focus on UX and UI.
        </div>
        <br>
        <h3>Skills:</h3>
        <div class="lineHeight text-body-1">
          <span>1.</span> HTML/CSS/JS
          <span>2.</span> Bootstrap
          <span>3.</span> Tailwind CSS
          <br>
          <span>4.</span> VueJs
          <span>5.</span> Vuetify
          <span>6.</span> Angular
          <br>
          <span>7.</span>NodeJs
          <span>8.</span> ExpressJs
          <span>9.</span> MongoDB
          <span>10.</span> Mongoose
          <br>
          <span>11.</span> Git
          <span>12.</span> Github
          <span>13.</span> Gitlab
        </div>
        <br>
        <h3>Education:</h3>
        <div class="lineHeight text-body-1">
          Bachelor's degree in Computer Engineering, Shahrood University of Technology, 2016-2021
        </div>
        <br>
        <h3>Personal Projects:</h3>
        <div class="lineHeight text-body-1">
          You can find my personal project in
          <a href="https://github.com/sadegh1377">here</a>
        </div>
        <br>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  methods: {
  }

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
