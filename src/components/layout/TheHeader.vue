<template>
  <header v-shadow="2">
    <h1>Weekly Team Planner</h1>
    <base-button id="login" icon="login">Log In</base-button>
  </header>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';

export default {
  components: { BaseButton },
};
</script>

<style scoped>
header {
  background-color: #1b5e20;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
}
</style>
