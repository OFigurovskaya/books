import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios'

createApp(App).use(createPinia()).use(VueAxios,axios).mount('#app')
