import Vue from "vue";

export const store = Vue.observable({
  bgColor: 'bgBlue',
  isModalVisible: false,
  modalImage: null
})

export const mutations = {
  setbgColor(bgColor) {
    store.bgColor = bgColor
  },
  setModalImage(img) {
    store.modalImage = img
  },
  showModal() {
    store.isModalVisible = true
  },
  closeModal() {
    store.isModalVisible = false
    store.modalImage = null
  }
}
