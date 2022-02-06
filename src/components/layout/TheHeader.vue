<template>
  <header>
    <h1>Weekly Team Planner</h1>
    <base-button id="login">Log In</base-button>
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
  width: 100%;
  height: 5rem;
  background-color: #12572c;
  color: #ffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #0000;
}

h1 {
  padding-left: 10px;
}
</style>
