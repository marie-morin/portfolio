import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import "./styles/styles.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";

library.add(fas, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

dom.watch();

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
