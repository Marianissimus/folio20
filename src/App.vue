<template>
  <div id="app" :class="[bgColor, isModalVisible ? 'modal-backdrop' : '']">
    <Navbar v-if="showNavbar && !isLogoAnimating" :isScrollingUp="isScrollingUp" @btnWasClicked="toggleBtnWasClicked"/>
    <transition name="modal-fade">
      <modal class="modal"
        v-show="isModalVisible"
      />
    </transition>
    <transition name="fade">
      <router-view @btnWasClicked="toggleBtnWasClicked"/>
    </transition>
    <back-to-top-btn :showButton="showButton"/>
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
    'back-to-top-btn': cmpBackToTopBtn
  },
  data () {
    return {
      prevScroll: 0,
      scrollPos: 0,
      btnWasClicked: false,
      isScrollingUp: true // to show Navbar on init
    }
  },
  computed: {
    showNavbar () {
      let routesToDisplay = ['Home', 'Login', 'Projects']
      return routesToDisplay.includes(this.$route.name)
    },
    showButton () {
      return this.scrollPos > 200
    }
  },
  mounted () {
    this.handleScroll()
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleBtnWasClicked () {
      this.btnWasClicked = true
    },
    showOrHideNavbar () {
      if (this.idInHomeView) return false // don't display navbar on get back from 'projects'
      if (this.btnWasClicked || this.scrollPos < this.prevScroll) {
        this.isScrollingUp = true
      } else {
        this.isScrollingUp = false
      }
      this.btnWasClicked = false
    },
    handleScroll () {
      window.addEventListener('scroll', () => {
        this.scrollPos = window.scrollY
        this.showOrHideNavbar()
        this.prevScroll = this.scrollPos
      })
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
