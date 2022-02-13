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
    };
  },
});

export default store;
