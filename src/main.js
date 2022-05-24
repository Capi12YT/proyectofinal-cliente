import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import VueAnimateOnScroll from 'vue3-animate-onscroll';
import { plugin, defaultConfig } from '@formkit/vue'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";


//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.baseURL = 'http://localhost:8080/api/';
//axios.defaults.baseURL = '/api/';

createApp(App).use(createPinia()).use(router).use(VueAnimateOnScroll).use(plugin,defaultConfig).mount('#app')
import "bootstrap/dist/js/bootstrap.js"
