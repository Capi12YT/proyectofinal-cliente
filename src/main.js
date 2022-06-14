//importacion de bootstrap
import "bootstrap/dist/css/bootstrap.css"
//importacion iconos bootstrap
import "bootstrap-icons/font/bootstrap-icons.css"
//importacion de libreria de animaciones con scroll
import VueAnimateOnScroll from 'vue3-animate-onscroll';
import { plugin, defaultConfig } from '@formkit/vue'
//importacion de pinia(store)
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
//importacion de router(rutas)
import router from './router'
//importacion de axios(libreria de peticiones)
import axios from "axios";

// url por defecto modo desarrollo
axios.defaults.baseURL = 'http://localhost:8080/api/';

// url por defecto modo produccion
// axios.defaults.baseURL = '/api/';

//creacion de app Vue
createApp(App).use(createPinia()).use(router).use(VueAnimateOnScroll).use(plugin,defaultConfig).mount('#app')

//importacion de bootstrap js
import "bootstrap/dist/js/bootstrap.js"
