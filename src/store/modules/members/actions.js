import { getMembers } from '../../../firebase';

export default {
  async getMembers({ commit }) {
    const membersList = await getMembers();
    commit('setMembers', membersList);
  },
};
