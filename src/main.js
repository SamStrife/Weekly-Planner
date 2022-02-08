import { createApp } from 'vue';
import App from './App.vue';
import BaseButton from './components/ui/BaseButton.vue';
import store from './store/index.js';
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';

const app = createApp(App);

app.component('base-button', BaseButton);

app.use(store);
app.use(BalmUI);
app.use(BalmUIPlus);

app.mount('#app');
