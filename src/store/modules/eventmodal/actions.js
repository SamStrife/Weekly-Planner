export default {
  setEventName({ commit }, payload) {
    commit('setEventName', payload);
  },
  setEventStart({ commit }, payload) {
    commit('setEventStart', payload);
  },
  setEventEnd({ commit }, payload) {
    commit('setEventEnd', payload);
  },
  setEventType({ commit }, payload) {
    commit('setEventType', payload);
  },
  setEventComplete({ commit }, payload) {
    commit('setEventComplete', payload);
  },
};
