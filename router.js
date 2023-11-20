// router.js (or where you define your routes)

import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/views/Home.vue';
// import documentation from '/src/views/Documentation.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: Documentation,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
