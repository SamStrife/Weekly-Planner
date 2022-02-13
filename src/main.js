import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import store from './store/index.js';

import BaseButton from './components/ui/BaseButton.vue';
import BaseContainer from './components/ui/BaseContainer.vue';

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-container', BaseContainer);

app.use(router);
app.use(store);
app.use(BalmUI, { $theme: { primary: '#388e3c' } });
app.use(BalmUIPlus);

app.mount('#app');
