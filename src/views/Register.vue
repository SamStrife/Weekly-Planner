<template>
  <base-container class="form">
    <ui-form type="|" action-align="center" item-margin-bottom="16">
      <h1>Create an account</h1>
      <ui-form-field>
        <ui-textfield
          type="text"
          placeholder="First Name"
          :required="true"
          v-model="firstName"
        ></ui-textfield>
      </ui-form-field>
      <ui-form-field>
        <ui-textfield
          type="text"
          placeholder="Last Name"
          :required="true"
          v-model="lastName"
        ></ui-textfield>
      </ui-form-field>
      <ui-form-field>
        <ui-textfield
          type="text"
          placeholder="Email Address"
          :required="true"
          v-model="email"
        ></ui-textfield>
      </ui-form-field>
      <ui-form-field>
        <ui-textfield
          type="password"
          placeholder="Password"
          :required="true"
          v-model="password"
        ></ui-textfield>
      </ui-form-field>
      <ui-form-field>
        <base-button icon="key" @click="register">Confirm</base-button>
      </ui-form-field>
    </ui-form>
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
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>
