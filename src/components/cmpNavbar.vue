<template>
  <div id="nav" :class="[bgColor, isScrollingUp ? 'showNavbar' : 'hideNavbar' ]">
    <div class="logo-and-name">
      <animated-logo :width="30" :direction="'reverse'" @click.native="scrollTo('top')" style="cursor: pointer" />
      <transition
          appear
          appear-class="link-appear-class"
          appear-to-class="link-appear-to-class"
          appear-active-class="link-appear-active-class"
          >
          <span @click="scrollTo('top')" class="main-links nav-name" style="{'transition-delay': '300ms'}">Marian Vidoe</span>
      </transition>
    </div>
    <div class="nav-links">
      <transition
        appear
        appear-class="link-appear-class"
        appear-to-class="link-appear-to-class"
        appear-active-class="link-appear-active-class"
        v-for="(link, index) in links" :key="link.text + index"
      >
        <span @click="scrollTo(link.element)" :style="{'transition-delay': 300 + (index+1) * 300  + 'ms'}" class="main-links">{{ link.text }}</span>
      </transition>
    </div>
    <div class="selector-container">
      <transition
        appear
        appear-class="link-appear-class"
        appear-to-class="link-appear-to-class"
        appear-active-class="link-appear-active-class"
      >
      <div class="selector-icon" @click.stop="showThemeSelector = !showThemeSelector" :style="{'transition-delay': '1500ms' }">
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 25 25"><defs/><path fill="#FFF" d="M12.53 25a12.5 12.5 0 010-25 13.17 13.17 0 0110.31 4.89c2.76 3.56 2.46 6.36 1.26 7.79a2.76 2.76 0 01-3.45.78c-1.65-.87-3-.37-3.56.58s-.16 2.57 2 3.76a2.81 2.81 0 011.2 3.2c-.5 2-2.8 4-7.76 4zm0-24a11.5 11.5 0 000 23c4.39 0 6.39-1.66 6.8-3.21a1.81 1.81 0 00-.78-2.12c-2.69-1.52-3.1-3.71-2.34-5.11s2.68-2.16 4.9-1a1.79 1.79 0 002.22-.56c.91-1 1.12-3.41-1.33-6.5A12.32 12.32 0 0012.53 1zm-1 21A2.5 2.5 0 1114 19.5a2.5 2.5 0 01-2.5 2.5zm0-4A1.5 1.5 0 1013 19.5a1.5 1.5 0 00-1.5-1.5zm-5-1A2.5 2.5 0 119 14.5 2.5 2.5 0 016.5 17zm0-4A1.5 1.5 0 108 14.5 1.5 1.5 0 006.5 13zm2-3A2.5 2.5 0 1111 7.5 2.5 2.5 0 018.5 10zm0-4A1.5 1.5 0 1010 7.5 1.5 1.5 0 008.5 6zm7 3A2.5 2.5 0 1118 6.5 2.5 2.5 0 0115.5 9zm0-4A1.5 1.5 0 1017 6.5 1.5 1.5 0 0015.5 5z" data-name="Paint Color Palette"/></svg>
      </div>
      </transition>
      <theme-selector class="theme-selector" v-if="showThemeSelector" @closeThemeSelector="showThemeSelector = false"  v-click-outside="collapseThemeSelector"/>
    </div>
  </div>
</template>

<script>
import ThemeSelector from '@/components/cmpThemeSelector'
import AnimatedLogo from '@/components/cmpAnimatedLogo'
import { mutations } from "@/store"

export default {
  props: ['isScrollingUp'],
  data () {
    return {
      links: [
        {
          element: 'about',
          text: 'About'
        },
        {
          element: 'homeprojects',
          text: 'Work'
        },
        {
          element: 'contact',
          text: 'Contact'
        }
      ],
      showThemeSelector: false
    }
  },
  components: {
    'theme-selector': ThemeSelector,
    'animated-logo': AnimatedLogo
  },
  methods: {
    collapseThemeSelector () {
      this.showThemeSelector = false
    },
    scrollTo (where) {
      this.$emit('btnWasClicked')
      if (this.$route.name !== 'Home') {
        mutations.setGoToIdInHomeView(where)
        this.$router.push('/')
      }
      else if (where === 'top') {
        window.scrollTo({
          top: 0,
          left: 0
        })
      }
      else {
        document.getElementById(where).scrollIntoView()
      }
    }
  }
}
</script>

<style lang="scss">

.selector-container {
  position: relative;
}

.theme-selector {
  position: absolute;
  top: 50px;
}

.link-appear-class {
  transform: scale(0);
  will-change: transform;
  transform-origin: center center;
}

.link-appear-to-class {
  transform: scale(1);
  transform-origin: center center;
  transition: all 1s;
}

#nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: $fontPrimary;
  height: 80px;
  position: -webkit-fixed;
  position: fixed;
  z-index: 100;
  @include shadowNeu;
}

.logo-and-name {
  display: flex;
  align-items: center;
}

.showNavbar {
  transition: all 1s;
  transform: translateY(0);
  @media only screen and (max-width: 600px) {
    bottom: 0;
  }
}

.hideNavbar {
  transition: all 1s;
  transform: translateY(-100px);
  @media only screen and (max-width: 600px) {
    bottom: 0;
    transform: translateY(100px);
  }
}

.nav-name {
  @media only screen and (max-width: 600px) {
    display: none;
  }
}

.nav-links {
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
  @media only screen and (max-width: 600px) {
    justify-content: space-around;
  }
}

#nav span {
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  margin-right: 15px;
  @media only screen and (max-width: 750px) {
    font-size: 1em;
  }
}

.main-links {
  padding: 20px 5px;
}

.selector-icon {
  width: 36px;
  height: 36px;
  margin-right: 2em;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    padding: 13px 10px;
  }
  @media only screen and (max-width: 750px) {
    width: 30px;
    height: 30px;
    margin-right: 1em;
  }
}

</style>