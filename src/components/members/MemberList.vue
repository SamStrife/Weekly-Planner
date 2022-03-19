<template>
  <base-container>
    <ui-list>
      <ui-item
        v-for="member in members"
        :key="member.uid"
        @click="selectUser(member.uid)"
        :selected="member.uid === selectedUser ? true : false"
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
const members = computed(() => store.getters.members);
const selectedUser = computed(() => store.getters.selectedUser);

function selectUser(id) {
  store.dispatch('getSelectedUser', id);
  console.log(`Memebrs List Selected user: ${selectedUser.value}`);
}
</script>

<style scoped></style>
