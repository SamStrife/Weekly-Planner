export default {
  members(state) {
    return state.members.map(
      (member) => `${member.firstName} ${member.lastName}`
    );
  },
};
