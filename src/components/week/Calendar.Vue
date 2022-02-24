<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script setup>
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import timeGrid from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

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
  events: [
    {
      userID: '',
      type: '',
      title: 'Test2',
      start: '2022-02-24T13:30:00',
      end: '2022-02-24T16:30:00',
      classNames: [],
      backgroundColor: '#1b5e20',
      borderColor: '#111',
    },
  ],
};
</script>
