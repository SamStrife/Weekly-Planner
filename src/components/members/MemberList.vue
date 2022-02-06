<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      aria-current="true"
      v-for="member in members"
      :key="member.id"
    >
      {{ member }}
    </li>
  </ul>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();
    const members = computed(() => store.getters.members);

    return { members };
  },
};
</script>

<style scoped></style>
