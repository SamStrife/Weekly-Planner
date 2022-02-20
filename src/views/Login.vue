<template>
  <base-container class="form">
    <ui-form type="|" action-align="center" item-margin-bottom="16">
      <h1>Log In</h1>
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
        <base-button icon="login" @click="login">Login</base-button>
      </ui-form-field>
      <ui-form-field class="register">
        <p>Not got an account?</p>
        <router-link
          style="text-decoration: none; color: inherit"
          to="/register"
          ><base-button icon="key">Create an account</base-button></router-link
        >
      </ui-form-field>
    </ui-form>
  </base-container>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');

const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      router.replace('/');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`${errorCode}: ${errorMessage}`);
    });
};
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.register {
  display: flex;
}
</style>
