<template>
    <v-app id="app">
        <NaveBar/>
        <v-main class="main">
            <router-view/>
        </v-main>
        <SemiFooter/>
    </v-app>
</template>

<script>

import NaveBar from "@/components/NaveBar";
import SemiFooter from "@/components/SemiFooter";

export default {
    name: 'App',
    components: {SemiFooter, NaveBar},
    data: () => ({
        //
    }),
};
</script>
<style>
@font-face {
    font-family: "vazirLight";
    src: local("vazirLight"),
    url(assets/font/FontsFree-Net-Vazir-Light.ttf) format("truetype");
}

#app {
    font-family: "vazirLight", Avenir, Helvetica, Arial, 'Markazi Text',
    'Almarai', 'Cairo', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.main {
    background-color: #f1f1f1;
}
</style>
