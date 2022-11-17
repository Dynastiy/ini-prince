import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";

import "@/assets/css/style.css";
import "@/assets/css/media-query.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import AOS from "aos";
import "aos/dist/aos.css";

// too be added before mounting app
// import vueCountryRegionSelect from "vue-country-region-select";
// Vue.use(vueCountryRegionSelect);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  mounted() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");
