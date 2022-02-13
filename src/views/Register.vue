<template>
  <base-container class="form">
    <h1>Create an account</h1>
    <p><input type="text" placeholder="First Name" v-model="firstName" /></p>
    <p><input type="text" placeholder="Last Name" v-model="lastName" /></p>
    <p><input type="text" placeholder="Email Address" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><base-button icon="key" @click="register">Confirm</base-button></p>
  </base-container>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { membersCol } from '../firebase';

import { useStore } from 'vuex';

import { useRouter } from 'vue-router';
import BaseButton from '../components/ui/BaseButton.vue';

const router = useRouter();
const store = useStore();

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const uid = ref('');

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Successfully Registered!');
      uid.value = data.user.uid;
      setDoc(doc(membersCol, uid.value), {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
      });
      store.dispatch('getActiveUser', {
        id: uid.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
      });
      router.replace('/');
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

<style scoped>
.form {
  padding: 10px;
}
</style>
