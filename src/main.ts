import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";

import Home from "./views/Home.vue";
import Gallery from "./views/Gallery.vue";
import NotFound from "./views/NotFound.vue";
import About from "./views/About.vue";
import { Vue3Mq } from "vue3-mq";

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
  // @ts-expect-error vue3mq doesn't have proper typescript support
  .use(Vue3Mq, { preset: "tailwind" })
  .mount('#app');
