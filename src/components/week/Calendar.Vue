<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script>
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import timeGrid from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [timeGrid, interactionPlugin],
        initialView: 'timeGridWeek',
        slotMinTime: '07:00:00',
        slotMaxTime: '18:00:00',
        weekends: false,
        locale: 'en-GB',
        height: '100%',
      },
    };
  },
};
</script>
