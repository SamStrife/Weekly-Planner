<template>
  <header v-shadow="2">
    <h1>Weekly Team Planner</h1>
    <base-button icon="login" v-if="!isLoggedIn()">Log In</base-button>
    <ui-chip v-else>Logged in as: {{ activeUser }}</ui-chip>
  </header>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue';
import { useStore } from 'vuex';
import { ref, computed } from 'vue';

const store = useStore();

const activeUser = computed(() => store.getters.activeUser);
console.log(activeUser.value);

const isLoggedIn = function () {
  if (activeUser.value) return true;
  if (!activeUser.value) return false;
};

console.log(isLoggedIn());
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

p {
  color: black;
}
</style>
