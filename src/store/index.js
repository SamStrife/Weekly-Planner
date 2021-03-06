import { createStore } from 'vuex';

import MembersModule from './modules/members/index.js';
import EventModalModule from './modules/eventmodal/index.js';

const store = createStore({
  modules: {
    members: MembersModule,
    eventModal: EventModalModule,
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
      commit('setActiveUser', null);
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
