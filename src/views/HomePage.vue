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
                    </v-card>
                </v-col>
                <v-col
                    cols="12"
                    xs="6"
                    sm="7"
                    md="8"
                >
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                    >
                        .col-12 .col-sm-6 .col-md-8
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
