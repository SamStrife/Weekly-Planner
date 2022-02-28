<template>
  <div class="page" v-shadow="2">
    <div class="cal" v-shadow="1">
      <p v-for="event in eventsImport">{{ event }}</p>
      <FullCalendar :options="calendarOptions" />
    </div>
    <div class="under">
      <div class="considerations" v-shadow="1">
        <ui-table fullwidth>Considerations</ui-table>
      </div>
      <div class="completions" v-shadow="1">
        <ui-table fullwidth>Completions</ui-table>
      </div>
    </div>
  </div>
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

const eventsImport = computed(() => store.getters.events);
console.log(eventsImport);
const events = [];

eventsImport.value.forEach((event) => events.push({ event }));

console.log(events);

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
  events: eventsImport,
};
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
}

.cal {
  flex-grow: 1;
  padding: 10px 10px 0px 10px;
}

.under {
  display: flex;
  flex-grow: 1;
}
.considerations {
  flex-grow: 1;
  padding: 10px 10px 0px 10px;
}
.completions {
  flex-grow: 1;
  padding: 10px 10px 0px 10px;
}
</style>
