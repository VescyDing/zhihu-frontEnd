import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import 'element-ui/lib/theme-chalk/index.css';
import stores from './store';
import routes from './routes';
import axios from "./api/axios";


Vue.config.productionTip = false;
Vue.use(Vuex)
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueCookies)

Vue.prototype.$axios = axios

const store = new Vuex.Store(
  stores
)

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
