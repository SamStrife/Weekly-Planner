<template>
  <ui-list>
    <ui-item v-for="member in members" :key="member.id">
      <ui-item-text-content>{{ member }}</ui-item-text-content>
    </ui-item>
  </ui-list>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

const store = useStore();
store.dispatch('getMembers');
const members = computed(() => store.getters.members);
</script>

<style scoped></style>
