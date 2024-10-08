import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";

import Home from "./views/Home.vue";
import Gallery from "./views/Gallery.vue";
import NotFound from "./views/NotFound.vue";
import About from "./views/About.vue";

const routes = [
  { path: '/', name: "Tessaworks", component: Home },
  { path: '/designs', name: "Designs", component: Gallery },
  { path: '/about', name: "About", component: About },
  { path: '/:catchAll(.*)*', name: 'Not Found', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
  .use(router)
  .mount('#app');
