export default {
  getStartOfWeek({ commit, state }) {
    const startOfWeek = state.selectedWeek
      .startOf('week')
      .toFormat('dd MMM yyyy');
    commit('setStartOfWeek', startOfWeek);
  },
  offsetWeek({ context, commit, state }) {
    let weekOffset = context;
    const startOfWeek = state.selectedWeek.startOf('week');
    let newStartOfWeek = startOfWeek.plus({ weeks: weekOffset });
    commit('setStartOfWeek', newStartOfWeek);
  },
};
