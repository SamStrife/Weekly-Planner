<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import { useStore } from 'vuex';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { membersCol } from './firebase';

const store = useStore();
store.dispatch('getMembers');

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    const uid = user.uid;
    async function getUser() {
      const docRef = doc(membersCol, uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        store.dispatch('getActiveUser', {
          id: uid,
          firstName: docSnap.data().firstName,
          lastName: docSnap.data().lastName,
          email: docSnap.data().email,
        });
        store.dispatch('getSelectedUser', uid);
      } else {
        console.log('No such document!');
        console.log(`Selected user: ${uid}`);
      }
    }
    getUser();
  } else {
    //
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
