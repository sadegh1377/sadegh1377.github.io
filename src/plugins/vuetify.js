import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#8A663F',
                navbar: '#8A663F',
                secondary: '#FFFBF5',
                third: '#fafafa',
            },
            dark: {
                primary: '#3f608a',
                navbar: '#090000',
                secondary: '#686666',
                third: '#4f4f4f',
            }
        },
    },
});
