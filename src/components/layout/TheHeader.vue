<template>
  <header v-shadow="2">
    <router-link style="text-decoration: none; color: inherit" to="/"
      ><h1>Weekly Team Planner</h1></router-link
    >
    <base-button icon="login" v-if="!activeUser">Log In</base-button>
    <ui-chip v-else>Logged in as: {{ activeUser }}</ui-chip>
  </header>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const activeUser = computed(() => {
  const user = store.getters.activeUser;
  if (!user) return false;
  return `${user.firstName} ${user.lastName}`;
});
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
