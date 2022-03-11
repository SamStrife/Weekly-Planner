<template>
  <div>
    <div>
      <NewEventDialog @close="toggleDialog" :show="dialogOpen"></NewEventDialog>
    </div>
    <div class="page" v-shadow="2">
      <div class="cal" v-shadow="1">
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
  </div>
</template>

<script>
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import timeGrid from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { getEvents } from '../../firebase';
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
import NewEventDialog from './NewEventDialog.vue';

export default {
  components: { FullCalendar, NewEventDialog },
  setup() {
    const store = useStore();
    const events = ref([]);

    const selectedUser = store.getters.selectedUser;

    watch(
      () => store.selectedUser,
      (user, prevUser) => {
        if (user !== prevUser) {
          selectedUser = user;
        }
      }
    );

    const dialogOpen = ref(false);
    const toggleDialog = () => (dialogOpen.value = !dialogOpen.value);

    getEvents().then((response) =>
      response.forEach((event) => events.value.push(event))
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
      events: events.value,
      select: function (info) {
        alert('selected ' + info.startStr + ' to ' + info.endStr);
        dialogOpen.value = true;
      },
    };
    return { calendarOptions, getEvents, events, dialogOpen, toggleDialog };
  },
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
