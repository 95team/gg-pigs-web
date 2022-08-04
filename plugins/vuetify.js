import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import light from './theme';

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light,
    },
  },
};

export default new Vuetify(opts);
