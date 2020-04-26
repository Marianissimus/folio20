import Vue from "vue";

export const store = Vue.observable({
  bckColor: 'blue'
})

export const mutations = {
  setBckColor(bckColor) {
    store.bckColor = bckColor;
  }
}
