import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
// import axios from "axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "Bienvenue - Marie Morin",
      requiresAuth: false,
    },
  },
  {
    path: "/work",
    name: "Work",
    component: () => import("../views/Work.vue"),
    meta: {
      title: "Mes projets",
      requiresAuth: false,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      title: "Mon parcours",
      requiresAuth: false,
    },
  },
  {
    path: "/*",
    name: "404",
    component: () => import("../views/NotFound.vue"),
    meta: {
      title: "Page introuvable - Groupamania",
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
