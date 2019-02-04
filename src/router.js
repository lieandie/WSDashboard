import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  linkActiveClass: "router-link-active",
  routes: [
    {
      path: "/projects",
      name: "projects",
      component: () => import("./views/Projects.vue")
    },
    {
      path: "/favourites",
      name: "favourites",
      component: () => import("./views/Favourites.vue")
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("./views/Settings.vue")
    }
  ]
});
