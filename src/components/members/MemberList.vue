<template>
  <base-container>
    <ui-list>
      <ui-item
        v-for="member in members"
        :key="member.uid"
        @click="selectUser(member.uid)"
      >
        <ui-item-text-content
          >{{ member.firstName }} {{ member.lastName }}</ui-item-text-content
        >
      </ui-item>
    </ui-list>
  </base-container>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
store.dispatch('getMembers');
const members = computed(() => store.getters.members);

function selectUser(id) {
  store.dispatch('getSelectedUser', id);
  console.log(`Selected User: ${id}`);
}
</script>

<style scoped></style>
