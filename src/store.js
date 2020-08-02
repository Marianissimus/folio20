import Vue from "vue";

export const store = Vue.observable({
  bgColor: 'bgMoreBlue',
  isModalVisible: false,
  modalImage: null,
  isLogoAnimating: true,
  isUserLoggedIn: false,
  idInHomeView: null
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
  },
  setLogoAnimating(arg) {
    store.isLogoAnimating = arg
  },
  setIsUserLoggedIn(arg) {
    store.isUserLoggedIn = arg
  },
  setGoToIdInHomeView(arg) {
    store.idInHomeView = arg
  }
}
