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
        <svg width="36" height="40" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true">
         <g>
          <g id="svg_9">
           <path fill="none" d="m18.49229,1.78496c-7.9166,0 -16.96547,4.51186 -16.96547,17.25602c0,9.25415 7.02646,19.17406 17.77554,19.17406l0.16109,0c4.03655,-0.07195 8.38148,-2.65757 8.38148,-8.15942c0,-1.05374 -0.39675,-1.96631 -0.74472,-2.77051c-0.0939,-0.2122 -0.18319,-0.42077 -0.26512,-0.63207c-0.79535,-1.98088 0.08193,-2.70585 2.14393,-4.15758c2.3354,-1.64481 5.53518,-3.8962 5.49376,-9.85343c0,-3.54192 -3.90583,-10.85707 -15.9805,-10.85707zm0.5155,32.05847c-2.06292,0 -3.68306,-1.60292 -3.68306,-3.6421c0,-2.041 1.62014,-3.64392 3.68306,-3.64392c2.06016,0 3.6803,1.60292 3.6803,3.64392c0,2.03918 -1.61922,3.6421 -3.6803,3.6421z" id="svg_2" stroke="#ffffff"/>
           <circle cx="33.08456" cy="14.15881" r="3.5" fill="#0575e6" id="svg_3" transform="matrix(0.920532, 0, 0, 0.910749, -3.14877, 0.537109)" stroke="#ffffff"/>
           <circle cx="24.37018" cy="7.87013" r="3.5" fill="#870223" id="svg_4" transform="matrix(0.920532, 0, 0, 0.910749, -3.14877, 0.537109)" stroke="#ffffff"/>
           <circle cx="14.37018" cy="12.87013" r="3.5" fill="#7832ff" id="svg_5" transform="matrix(0.920532, 0, 0, 0.910749, -3.14877, 0.537109)" stroke="#ffffff"/>
           <circle cx="13.37018" cy="23.87013" r="3.5" fill="#201aac" id="svg_6" transform="matrix(0.920532, 0, 0, 0.910749, -3.14877, 0.537109)" stroke="#ffffff"/>
          </g>
         </g>

        </svg>
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
  opacity: 0;
}

.link-appear-to-class {
  transition: all 1s;
  opacity: 1;
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
  position: relative;
  left: -2px;
  @media only screen and (max-width: 600px) {
    padding: 13px 10px;
    top: -6px;
    left: -2px;
  }
  @media only screen and (max-width: 750px) {
    width: 30px;
    height: 30px;
    margin-right: 1em;
    top: -4px;
  }
}

</style>
