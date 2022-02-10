export default {
  getStartOfWeek({ commit, state }) {
    const startOfWeek = state.selectedWeek
      .startOf('week')
      .toFormat('dd MMM yyyy');
    commit('setStartOfWeek', startOfWeek);
  },
  offsetWeek({ commit, state, context }) {
    console.log(`Context: ${context}`);
    let newStartOfWeek = state.selectedWeek
      .startOf('week')
      .plus({ weeks: context })
      .toFormat('dd MMM yyyy');
    commit('setStartOfWeek', newStartOfWeek);
    console.log(`New Start Of Week: ${newStartOfWeek}`);
  },
};
