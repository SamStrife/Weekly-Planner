<template>
  <base-container class="form">
    <ui-form type="|" action-align="center" item-margin-bottom="16">
      <h1>Create an account</h1>
      <ui-form-field>
        <ui-textfield
          outlined
          placeholder="First Name"
          required
          v-model.trim="firstName"
        ></ui-textfield>
      </ui-form-field>
      <ui-form-field>
        <ui-textfield
          outlined
          placeholder="Last Name"
          required
          v-model.trim="lastName"
        ></ui-textfield>
      </ui-form-field>
      <ui-form-field>
        <ui-textfield
          outlined
          placeholder="Email Address"
          required
          v-model.trim="email"
        ></ui-textfield>
      </ui-form-field>
      <ui-form-field>
        <ui-textfield
          outlined
          input-type="password"
          placeholder="Password"
          required
          v-model="password"
        ></ui-textfield>
      </ui-form-field>
      <ui-form-field>
        <ui-textfield
          outlined
          input-type="password"
          placeholder="Confirm Password"
          required
          v-model="confirmedPassword"
          v-on:blur="checkPasswords"
        ></ui-textfield>
        <p class="error" v-if="!passwordMatch">Passwords do not match</p>
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

const router = useRouter();
const store = useStore();

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmedPassword = ref('');
const passwordMatch = ref(true);
const uid = ref('');

const checkPasswords = function () {
  return password.value === confirmedPassword.value
    ? (passwordMatch.value = true)
    : (passwordMatch.value = false);
};

const register = () => {
  if (passwordMatch.value) {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log('Successfully Registered!');
        uid.value = data.user.uid;
        setDoc(doc(membersCol, uid.value), {
          uid: uid.value,
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
  }
};
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.error {
  color: crimson;
}
</style>
