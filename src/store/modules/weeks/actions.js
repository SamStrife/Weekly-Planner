export default {
  getStartOfWeek({ commit, state }) {
    const startOfWeek = state.selectedWeek
      .startOf('week')
      .toFormat('dd MMM yyyy');
    commit('setStartOfWeek', startOfWeek);
  },
  offsetWeek({ commit, state }, offset) {
    const newStartOfWeek = state.selectedWeek
      .startOf('week')
      .plus({ weeks: offset })
      .toFormat('dd MMM yyyy');
    commit('setStartOfWeek', newStartOfWeek);
  },
};
