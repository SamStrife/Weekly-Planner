import { createStore } from 'vuex';

import MembersModule from './modules/members/index.js';
import WeekModule from './modules/week/index.js';

const store = createStore({
  modules: {
    members: MembersModule,
    week: WeekModule,
  },
});

export default store;
