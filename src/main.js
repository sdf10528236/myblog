/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify/lib'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuetify)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
