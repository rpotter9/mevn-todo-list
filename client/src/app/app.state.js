import Vue from 'vue';
import Vuex from 'vuex';

import { tasksState } from './modules/tasks';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tasksState
  }
});