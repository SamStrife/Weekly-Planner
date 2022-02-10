<template>
  <div class="page" v-shadow="2">
    <div class="selector" v-shadow="1">
      <base-button icon="keyboard_arrow_left"></base-button>
      <h1>Week Commencing: {{ startOfWeek }}</h1>
      <base-button icon="keyboard_arrow_right"></base-button>
    </div>
    <div class="calendar" v-shadow="1">Calendar</div>
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

const store = useStore();
store.dispatch('getStartOfWeek');
const startOfWeek = computed(() => store.getters.startOfWeek);

const weekOffset = ref(0);
console.log(weekOffset.value);

function changeWeek(mode) {
  if (mode === 'add') weekOffset.value++;
  if (mode === 'subtract') weekOffset.value--;
  console.log(weekOffset.value);
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
.calendar {
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
