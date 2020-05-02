import Vue from "vue";

export const store = Vue.observable({
  bgColor: 'bckBlue'
})

export const mutations = {
  setbgColor(bgColor) {
    store.bgColor = bgColor;
  }
}
