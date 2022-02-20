<template>
  <header v-shadow="2">
    <router-link style="text-decoration: none; color: inherit" to="/"
      ><h1>Weekly Team Planner</h1></router-link
    >
    <router-link
      v-if="!activeUser"
      style="text-decoration: none; color: inherit"
      to="/login"
      ><base-button icon="login" v-if="!activeUser">Log In</base-button>
    </router-link>
    <ui-chip v-else @click="logout">Logged in as: {{ activeUser }}</ui-chip>
  </header>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { getAuth, signOut } from 'firebase/auth';

const store = useStore();

const activeUser = computed(() => {
  const user = store.getters.activeUser;
  if (!user) return false;
  return `${user.firstName} ${user.lastName}`;
});

function logout() {
  signOut(getAuth())
    .then(() => {
      store.dispatch('logOutUser');
    })
    .catch((error) => {
      console.log(error);
    });
}
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

router-link {
  text-decoration: none;
  color: inherit;
}
</style>
