import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  state() {
    return {
      eventModalID: '',
      eventModalName: '',
      eventModalStart: '',
      eventModalEnd: '',
      eventModalType: '',
      eventModalComplete: '',
    };
  },
  mutations,
  actions,
  getters,
};
