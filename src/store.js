import Vue from "vue";

export const store = Vue.observable({
  bgColor: 'bgBlue'
})

export const mutations = {
  setbgColor(bgColor) {
    store.bgColor = bgColor;
  }
}
