import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import Gallery from "./views/Gallery.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/designs', component: Gallery },
  { path: '/:catchAll(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

createApp(App)
  .use(router)
  .mount('#app')
