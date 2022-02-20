import { createStore } from 'vuex';

import MembersModule from './modules/members/index.js';
import WeekModule from './modules/weeks/index.js';
import AuthModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    members: MembersModule,
    week: WeekModule,
    auth: AuthModule,
  },
  state() {
    return {
      activeUser: null,
    };
  },
  actions: {
    getActiveUser({ commit }, user) {
      const activeUser = user;
      commit('setActiveUser', activeUser);
    },
    logOutUser({ commit }) {
      const activeUser = null;
      commit('setActiveUser', activeUser);
    },
  },
  getters: {
    activeUser(state) {
      return state.activeUser;
    },
  },
  mutations: {
    setActiveUser(state, activeUser) {
      state.activeUser = activeUser;
    },
  },
});

export default store;
