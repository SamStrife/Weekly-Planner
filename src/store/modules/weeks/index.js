import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

import { DateTime } from 'luxon';

export default {
  state() {
    return {
      selectedWeek: DateTime.now(),
      startOfWeek: '',
    };
  },
  mutations,
  actions,
  getters,
};
