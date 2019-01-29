import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faCubes } from "@fortawesome/free-solid-svg-icons/faCubes";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons/faDoorOpen";

library.add(faCog, faStar, faCubes, faDoorOpen);

Vue.component("fai", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
