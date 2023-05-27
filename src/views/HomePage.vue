<template>
    <div class="text-center mt-15 homePage">
        <v-container class="grey lighten-5">
            <v-row>
                <v-col
                    cols="12"
                    xs="6"
                    sm="5"
                    md="4"
                >
                    <v-card
                        class="pa-2"
                        outlined
                        tile>
                        <img class="profileImage elevation-5" src="../assets/profilePhoto.jpg" alt="Profile Image">
                        <v-card-title class="justify-center pt-2">
                            {{ $t('homePage.name') }}
                        </v-card-title>
                        <v-card-subtitle class="">{{ $t('homePage.occupation') }}</v-card-subtitle>
                        <v-card-text class="body-1 summary" v-html="$t('homePage.summary')">
                        </v-card-text>
                        <v-card-actions>
                            <a href="https://github.com/sadegh1377" target="_blank">
                                <v-icon class="mr-2">mdi-github</v-icon>
                            </a>
                            <a href="https://www.linkedin.com/in/sadegh-hadipour-b3b62a192/" target="_blank">
                                <v-icon class="mr-2">mdi-linkedin</v-icon>
                            </a>
                            <v-icon :class="{'mr-2': $i18n.locale === 'fa'}">mdi-phone</v-icon>
                            <span class="body-1">{{ $t("homePage.phoneNumber") }}</span>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col
                    class="about"
                    cols="12"
                    xs="6"
                    sm="7"
                    md="8">
                    <v-card
                        class="pa-4"
                        outlined
                        tile>
                        I am a front-end developer with over 4 years of experience in designing and developing
                        responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and various
                        front-end frameworks such as Vue, Angular, and React.
                        Experienced in agile development methodology, and familiar with version
                        control tools such as Git. Strong communication and collaboration skills, and able to
                        work effectively in a team environment.
                        <br>
                        <br>
                        <b>Technical Skills:</b>
                        <br>
                        <ul>
                            <li>Languages: HTML, CSS, JavaScript</li>
                            <li>Frameworks: Vue, Angular, React, Bootstrap, TailWindCss</li>
                            <li>Other: Responsive design, cross-browser compatibility, accessibility standards</li>
                        </ul>
                        <br>
                        <br>
                        <b>Work Experience:</b>
                        <p class="body-2 font-italic">
                            Front-End Developer
                            <br>
                            Filio Company | Jan 2022 - Aug 2022
                        </p>
                        <ul>
                            <li>Collaborate with designers and back-end developers to create responsive websites and web
                                applications using Vue, quasar and other front-end technologies.
                            </li>
                            <li>Implement designs and user interfaces using HTML, CSS, and JavaScript, while ensuring
                                cross-browser compatibility and accessibility.
                            </li>
                            <li>Develop and maintain code libraries, style guides, and other documentation to ensure
                                consistency and code reusability.
                            </li>
                            <li>Participate in code reviews and provide feedback on coding best practices and
                                optimization techniques.
                            </li>
                            <li>Troubleshoot issues related to front-end development, and work with the team to resolve
                                bugs and performance issues.
                            </li>
                        </ul>
                        <br>
                        <br>
                        <b>Education:</b>
                        <p class="body-2 font-italic">
                            Bachelor's degree in Computer Engineering
                            <br>
                            Shahrood University of Technology| Sep 2017 - Jan 2022
                        </p>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
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

.about {
    text-align: justify;
}

.lineHeight {
    line-height: 1.2 !important;
}

</style>
