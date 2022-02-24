<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script setup>
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import timeGrid from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useStore } from 'vuex';
import { ref, computed } from 'vue';
const store = useStore();

const userID = computed(() => store.getters.selectedUser);
console.log(`Calendar selected user: ${userID.value}`);

const eventsImport = [
  {
    id: 1,
    userID: 'PFriETPF6nOQfmrJfzmzCqUPd3J2',
    type: '',
    title: "Test's event",
    start: '2022-02-24T13:30:00',
    end: '2022-02-24T16:30:00',
    classNames: [],
    backgroundColor: '#1b5e20',
    borderColor: '#111',
  },
  {
    id: 2,
    userID: 'bzMdKRSkJdU1DCVISlQT63BIAxY2',
    type: '',
    title: "Sam's event",
    start: '2022-02-23T08:30:00',
    end: '2022-02-23T11:30:00',
    classNames: [],
    backgroundColor: '#1b5e20',
    borderColor: '#111',
  },
];

const filteredEvents = eventsImport.filter(
  (event) => event.userID === userID.value
);

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
  events: filteredEvents,
};
</script>
