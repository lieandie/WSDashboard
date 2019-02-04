import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {faCubes} from "@fortawesome/free-solid-svg-icons/faCubes";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons/faDoorOpen";
import {faFilter} from "@fortawesome/free-solid-svg-icons/faFilter";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

library.add(faCog, faStar, faCubes, faDoorOpen, faFilter, faTimes);
Vue.component("fai", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
