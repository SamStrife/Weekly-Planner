import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  state() {
    return {
      members: [
        {
          id: 1,
          firstName: 'Sam',
          lastName: 'Fletcher',
        },
        {
          id: 2,
          firstName: 'Steve',
          lastName: 'Johnson',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
