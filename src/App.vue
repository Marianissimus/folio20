<template>
  <div id="app" :class="[bgColor, isModalVisible ? 'modal-backdrop' : '']">
    <Navbar v-if="showNavbar && !isLogoAnimating"/>
    <transition name="modal-fade">
      <modal class="modal"
        v-show="isModalVisible"
      />
    </transition>
    <transition name="fade">
      <router-view/>
    </transition>
    <back-to-top-btn />
  </div>
</template>

<script>
import Navbar from '@/components/cmpNavbar'
import Modal from '@/components/cmpModal.vue'
import cmpBackToTopBtn from '@/components/cmpBackToTopBtn'

export default {
  components: {
    'Navbar': Navbar,
    'modal': Modal,
    'back-to-top-btn': cmpBackToTopBtn,
  },
  computed: {
    showNavbar () {
      let routesToDisplay = ['Home', 'Login', 'Projects']
      return routesToDisplay.includes(this.$route.name)
    }
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.modal-backdrop{
  &:after{
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(1, 1, 1, .3);
  }
}

</style>
