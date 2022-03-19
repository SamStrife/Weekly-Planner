<template>
  <div>
    <div v-if="show" class="backdrop" @keydown.esc="close" tabindex="0"></div>
    <dialog open v-if="show" @keydown.esc="close" tabindex="0">
      <header>
        <h2>{{ modalTitle }}</h2>
      </header>
      <ui-form class="conditions-form" nowrap action-align="center">
        <ui-grid>
          <ui-grid-cell>
            <ui-form-field :class="['required']">
              <label>Event Name</label>
              <ui-textfield v-model="eventName" :required="true"></ui-textfield>
            </ui-form-field>
          </ui-grid-cell>
          <ui-grid-cell>
            <ui-form-field>
              <label>Event Type</label>
              <ui-select
                :v-model="eventType"
                :required="true"
                :options="eventTypeOptions"
              >
                Event Type
              </ui-select>
            </ui-form-field>
          </ui-grid-cell>
          <ui-grid-cell>
            <ui-form-field>
              <label>Start Time</label>
              <ui-datepicker
                v-model="startTime"
                :config="{ enableTime: true, dateFormat: 'd-m-Y H:i' }"
                placeholder="Start Date/Time.."
              >
                {{ eventStart }}</ui-datepicker
              >
            </ui-form-field>
          </ui-grid-cell>
          <ui-grid-cell>
            <ui-form-field>
              <label>End Time</label>
              <ui-datepicker
                v-model="endTime"
                :config="{ enableTime: true, dateFormat: 'd-m-Y H:i' }"
                placeholder="End Date/Time.."
                >{{ eventEnd }}</ui-datepicker
              >
            </ui-form-field>
          </ui-grid-cell>
        </ui-grid>
        <ui-form-field v-if="props.modalButtons === 'full'">
          <base-button @click="submit">Submit</base-button>
          <base-button @click="close">Cancel</base-button>
        </ui-form-field>
        <ui-form-field v-else-if="props.modalButtons === 'basic'">
          <base-button @click="close">Close</base-button>
        </ui-form-field>
      </ui-form>
    </dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const props = defineProps({
  show: { type: Boolean, required: true },
  modalTitle: { type: String, required: false, default: 'Event' },
  modalButtons: { type: String, required: false, default: 'basic' },
});

const emit = defineEmits(['close']);

const eventName = computed(() => store.getters.eventName);
const eventType = ref('');
const startTime = computed(() => store.getters.eventStart);
const endTime = computed(() => store.getters.eventEnd);

const eventTypeOptions = [
  {
    label: 'Task',
    value: 'task',
  },
  {
    label: 'Meeting',
    value: 'meeting',
  },
  {
    label: 'Absence',
    value: 'absence',
  },
];

const close = () => {
  emit('close');
  store.dispatch('setEventID', null);
  store.dispatch('setEventName', null);
  store.dispatch('setEventStart', null);
  store.dispatch('setEventEnd', null);
};
const submit = () => {
  console.log(`
  event name: ${eventName.value}
  event type: ${eventType.value.value}
  start time: ${startTime.value}
  end time: ${endTime.value}

  `);
  emit('close');
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}
header {
  background-color: #1b5e20;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
}

menu {
  display: flex;
  flex: space-between;
}
</style>
