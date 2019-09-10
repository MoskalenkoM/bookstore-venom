import Vue from 'vue';
import Vuex from 'vuex';

import CheckProfile from './modules/CheckProfile';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CheckProfile
  },
  strict: process.env.NODE_ENV !== 'production'
});
