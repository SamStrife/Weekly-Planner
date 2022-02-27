import { getEvents } from '../../../firebase';

export default {
  async getEvents({ commit }) {
    const eventList = await getEvents();
    commit('setEvents', eventList);
  },
};
