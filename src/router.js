import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/services",
      name: "services",
      component: () => import("./views/Services.vue")
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
