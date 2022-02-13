<template>
  <div class="page" v-shadow="2">
    <div class="selector" v-shadow="1">
      <base-button
        icon="keyboard_arrow_left"
        @click="changeWeek('subtract')"
      ></base-button>
      <h1>Week Commencing: {{ startOfWeek }}</h1>
      <base-button
        icon="keyboard_arrow_right"
        @click="changeWeek('add')"
      ></base-button>
    </div>
    <div class="cal" v-shadow="1">
      <!-- <calendar
        style="height: 650px"
        :taskView="false"
        :scheduleView="['time']"
        :week="{ workweek: true, hourStart: 7, hourEnd: 18, startDayOfWeek: 1 }"
      /> -->
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
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
// import 'tui-calendar/dist/tui-calendar.css';
// import Calendar from '@toast-ui/vue-calendar/src/Calendar.vue';

const store = useStore();
store.dispatch('getStartOfWeek');

//Get Current Week
const startOfWeek = computed(() => store.getters.startOfWeek);

//Change Week
const weekOffset = ref(0);
function changeWeek(mode) {
  if (mode === 'add') weekOffset.value++;
  if (mode === 'subtract') weekOffset.value--;
  store.dispatch('offsetWeek', weekOffset.value);
}
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.under {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}

.selector {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding: 10px 10px 0px 10px;
}
.cal {
  height: 20rem;
  flex-grow: 5;
  padding: 10px 10px 0px 10px;
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
