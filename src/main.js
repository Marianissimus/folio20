import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from "@/store"

Vue.config.productionTip = false
Vue.mixin({
  computed: {
    bgColor() {
      return store.bgColor;
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
