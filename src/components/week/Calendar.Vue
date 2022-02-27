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

const selectedUser = computed(() => store.getters.selectedUser);
// console.log(`Calendar selected user: ${selectedUser.value}`);

const events = computed(() => store.getters.events);

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
