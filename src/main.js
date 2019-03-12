import Vue from 'vue'
import App from './App.vue'
import {router} from "./router/index";
import store from './store'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import './assets/material-icons.css';
Vue.use(MuseUI);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
