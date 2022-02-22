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
};
</script>
