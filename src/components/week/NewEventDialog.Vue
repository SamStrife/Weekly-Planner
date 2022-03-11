<template>
  <div>
    <div v-if="show" class="backdrop"></div>
    <dialog open v-if="show">
      <header>
        <h2>New Event</h2>
      </header>
      <section>
        <p>Event Name</p>
        <ui-textfield v-model="eventName" :required="true">
          Event Name
        </ui-textfield>
        <p>Event Name</p>
        <ui-select
          :v-model="eventType"
          :required="true"
          :options="eventTypeOptions"
        >
          Event Type
        </ui-select>
        <p>Start Time</p>
        <ui-datepicker
          v-model="startTime"
          :config="{ enableTime: true, dateFormat: 'd-m-Y H:i' }"
          placeholder="Start Date/Time.."
        ></ui-datepicker>
        <p>End Time</p>
        <ui-datepicker
          v-model="endTime"
          :config="{ enableTime: true, dateFormat: 'd-m-Y H:i' }"
          placeholder="End Date/Time.."
        ></ui-datepicker>
        <p>Event Description</p>
        <ui-textfield
          input-type="textarea"
          rows="8"
          cols="40"
          v-model="eventDescription"
        >
          Event Description
        </ui-textfield>
      </section>
      <menu>
        <base-button @click="submit">Submit</base-button>
        <base-button @click="close">Cancel</base-button>
      </menu>
    </dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const eventName = ref('');
const eventType = ref('');
const startTime = ref('');
const endTime = ref('');
const eventDescription = ref('');
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

const props = defineProps({
  show: { type: Boolean, required: true },
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};

const submit = () => {
  console.log(`
  event name: ${eventName.value}
  event type: ${eventType.value}
  start time: ${startTime.value}
  end time: ${endTime.value}
  event description: ${eventDescription.value}
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
