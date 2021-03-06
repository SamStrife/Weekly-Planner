<template>
  <div>
    <Teleport to="body">
      <div>
        <NewEventDialog
          @close="toggleDialog"
          :show="dialogOpen"
          :modal-title="modalTitle"
          :modal-buttons="modalButtons"
        ></NewEventDialog>
      </div>
    </Teleport>
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
import luxonPlugin from '@fullcalendar/luxon';
import { getEvents } from '../../firebase';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import NewEventDialog from './NewEventDialog.vue';

export default {
  components: { FullCalendar, NewEventDialog },
  setup() {
    const store = useStore();

    const loggedUser = computed(() => store.getters.activeUser);
    const selectedUser = computed(() => store.getters.selectedUser);
    console.log(`Week View - Selected User: ${selectedUser.value}`);

    //INFO: Events
    const events = [];

    getEvents().then((response) =>
      response.forEach((event) => events.push(event))
    );

    //INFO:Modal Stuff
    const dialogOpen = ref(false);
    const toggleDialog = () => (dialogOpen.value = !dialogOpen.value);
    const modalTitle = ref('');
    const modalButtons = ref('');

    function sendDataToModal(type, info) {
      modalButtons.value = type;
      if (type === 'basic') {
        if (!!loggedUser.value?.id) {
          store.dispatch('setEventStart', info.startStr);
          store.dispatch('setEventEnd', info.endStr);
          modalTitle.value = 'New Event';
          dialogOpen.value = true;
        } else {
          alert('Please Log in to create a new event');
        }
      } else {
        if (type === 'full') {
          store.dispatch('setEventID', info.event.extendedProps.ID);
          store.dispatch('setEventName', info.event.title);
          store.dispatch('setEventStart', info.event.startStr);
          store.dispatch('setEventEnd', info.event.endStr);
          store.dispatch('setEventType', 'Test');
          modalTitle.value = 'Update Event';
          dialogOpen.value = true;
        }
      }
    }

    //INFO: Calendar
    const calendarOptions = {
      plugins: [timeGrid, interactionPlugin, luxonPlugin],
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
      select: function (info) {
        sendDataToModal('basic', info);
      },
      eventClick: function (info) {
        sendDataToModal('full', info);
      },
    };

    return {
      calendarOptions,
      getEvents,
      events,
      dialogOpen,
      toggleDialog,
      modalTitle,
      modalButtons,
    };
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
