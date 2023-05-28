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
                    <v-card
                        class="pa-2 rounded"
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
                        tile
                        v-html="$t('homePage.about')">
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
