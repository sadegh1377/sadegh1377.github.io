import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1976d2',
                secondary: '#f1f1f1',
                third: '#fafafa',
            },
            dark: {
                primary: '#090000',
                secondary: '#686666',
                third: '#4f4f4f',
            }
        },
    },
});
