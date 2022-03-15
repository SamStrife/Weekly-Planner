export default {
  setEventName(state, eventName) {
    state.eventModalName = eventName;
  },
  setEventStart(state, eventStart) {
    state.eventModalStart = eventStart;
  },
  setEventEnd(state, eventEnd) {
    state.eventModalEnd = eventEnd;
  },
  setEventType(state, eventType) {
    state.eventModalType = eventType;
  },
  setEventComplete(state, eventComplete) {
    state.eventModalComplete = eventComplete;
  },
};
