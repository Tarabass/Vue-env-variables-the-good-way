import Vue from "vue";
import App from "./App.vue";

import configPlugin from '@/config'
Vue.use(configPlugin)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
