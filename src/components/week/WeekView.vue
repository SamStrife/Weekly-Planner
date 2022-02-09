<template>
  <div class="page" v-shadow="2">
    <div class="selector" v-shadow="1">Week Selector</div>
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

<script setup></script>

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
  flex-grow: 1;
}
.calendar {
  flex-grow: 5;
}
.considerations {
  flex-grow: 1;
}
.completions {
  flex-grow: 1;
}
</style>
