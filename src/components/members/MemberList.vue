<template>
  <!-- <base-container> -->
  <ui-list>
    <ui-item v-for="member in members" :key="member.id">
      <ui-item-text-content>{{ member }}</ui-item-text-content>
    </ui-item>
  </ui-list>
  <!-- </base-container> -->
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
store.dispatch('getMembers');
const members = computed(() => store.getters.members);
</script>

<style scoped></style>
