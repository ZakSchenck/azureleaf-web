import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Documentation from "./views/Documentation.vue";

const router = createRouter({
  history: createWebHistory('/azureleaf-web/'),
  routes: [
    { path: "/", component: Home, meta: { title: 'Azureleaf - Home' } },
    { path: "/documentation", component: Documentation, meta: { title: 'Azureleaf - Documentation' } },
  ],
});

router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title || "Default Title"; // Set a default title or retrieve it from route meta

  document.title = pageTitle; // Set the title based on the route's meta or default title
  next();
});

const app = createApp(App);

app.use(router); // Use the router

app.mount("#app");
