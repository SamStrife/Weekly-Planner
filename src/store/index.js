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
      selectedUser: null,
    };
  },
  actions: {
    getActiveUser({ commit }, user) {
      commit('setActiveUser', user);
    },
    logOutUser({ commit }) {
      const activeUser = null;
      commit('setActiveUser', activeUser);
      commit('setSelectedUser', null);
    },
    getSelectedUser({ commit }, userID) {
      commit('setSelectedUser', userID);
    },
  },
  getters: {
    activeUser(state) {
      return state.activeUser;
    },
    selectedUser(state) {
      return state.selectedUser;
    },
  },
  mutations: {
    setActiveUser(state, activeUser) {
      state.activeUser = activeUser;
    },
    setSelectedUser(state, selectedUser) {
      state.selectedUser = selectedUser;
    },
  },
});

export default store;
