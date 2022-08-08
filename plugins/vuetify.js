import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import light from './light';
import dark from './dark';
import '~/assets/scss/index.scss';

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light,
      dark,
    },
  },
};

export default new Vuetify(opts);
