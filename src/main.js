import { createApp } from 'vue';
import App from './App.vue';
import BaseButton from './components/ui/BaseButton.vue';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store/index.js';

const app = createApp(App);

app.component('base-button', BaseButton);
app.use(store);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
