<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script setup>
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import timeGrid from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
store.dispatch('getEvents');
const selectedUser = computed(() => store.getters.selectedUser);
// console.log(`Calendar selected user: ${selectedUser.value}`);

const eventsImport = computed(() => store.getters.events);
console.log(`Events Import: ${eventsImport}`);
const events = [];
function importEvents(eventsImport) {
  for (const event in eventsImport) {
    events.push(event);
  }
}
importEvents(eventsImport);

// const filteredEvents = events.filter(
//   (event) => event.userID === 'bzMdKRSkJdU1DCVISlQT63BIAxY2'
// );

const calendarOptions = {
  plugins: [timeGrid, interactionPlugin],
  initialView: 'timeGridWeek',
  slotMinTime: '07:00:00',
  slotMaxTime: '18:00:00',
  weekends: false,
  locale: 'en-GB',
  contentHeight: 'auto',
  height: 'auto',
  editable: true,
  eventStartEditable: true,
  selectable: true,
  events: events,
};
</script>
