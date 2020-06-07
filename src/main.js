import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from "@/store"
import ScrollAnimation from './directives/scrollanimation'
import cmpButtonWIcon from '@/components/cmpButtonWIcon'
import clickOutside from './directives/click-outside'

Vue.component('btn-w-icon', cmpButtonWIcon)
Vue.directive('scrollanimation', ScrollAnimation)
Vue.directive('click-outside', clickOutside)

Vue.config.productionTip = false
Vue.mixin({
  computed: {
    bgColor() {
      return store.bgColor;
    },
    isModalVisible () {
      return store.isModalVisible;
    },
    modalImage () {
      return store.modalImage
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
