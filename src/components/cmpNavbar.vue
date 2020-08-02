<template>
 <transition
    v-if="!isLogoAnimating"
    appear
    appear-class="nav-appear-class"
    appear-to-class="nav-appear-to-class"
    >
    <div id="nav">
      <animated-logo :width="30" :direction="'reverse'"/>
      <div class="nav-name nav-element">
        <transition
          appear
          appear-class="link-appear-class"
          appear-to-class="link-appear-to-class"
          appear-active-class="link-appear-active-class"
        >
          <span @click="scrollTo('top')" :style="{'transition-delay': '400ms'}">Marian Vidoe</span>
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
          <span @click="scrollTo(link.element)" :style="{'transition-delay': 400 + index * 400  + 'ms'}">{{ link.text }}</span>
        </transition>
      </div>
      <div class="options">
        <transition
          appear
          appear-class="link-appear-class"
          appear-to-class="link-appear-to-class"
          appear-active-class="link-appear-active-class"
        >
        <div class="selector-icon" @click.stop="showThemeSelector = !showThemeSelector" :style="{'transition-delay': '1400ms' }">
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 25 25"><defs/><path fill="#FFF" d="M12.53 25a12.5 12.5 0 010-25 13.17 13.17 0 0110.31 4.89c2.76 3.56 2.46 6.36 1.26 7.79a2.76 2.76 0 01-3.45.78c-1.65-.87-3-.37-3.56.58s-.16 2.57 2 3.76a2.81 2.81 0 011.2 3.2c-.5 2-2.8 4-7.76 4zm0-24a11.5 11.5 0 000 23c4.39 0 6.39-1.66 6.8-3.21a1.81 1.81 0 00-.78-2.12c-2.69-1.52-3.1-3.71-2.34-5.11s2.68-2.16 4.9-1a1.79 1.79 0 002.22-.56c.91-1 1.12-3.41-1.33-6.5A12.32 12.32 0 0012.53 1zm-1 21A2.5 2.5 0 1114 19.5a2.5 2.5 0 01-2.5 2.5zm0-4A1.5 1.5 0 1013 19.5a1.5 1.5 0 00-1.5-1.5zm-5-1A2.5 2.5 0 119 14.5 2.5 2.5 0 016.5 17zm0-4A1.5 1.5 0 108 14.5 1.5 1.5 0 006.5 13zm2-3A2.5 2.5 0 1111 7.5 2.5 2.5 0 018.5 10zm0-4A1.5 1.5 0 1010 7.5 1.5 1.5 0 008.5 6zm7 3A2.5 2.5 0 1118 6.5 2.5 2.5 0 0115.5 9zm0-4A1.5 1.5 0 1017 6.5 1.5 1.5 0 0015.5 5z" data-name="Paint Color Palette"/></svg>
        </div>
        </transition>
        <theme-selector class="theme-selector" v-if="showThemeSelector" @closeThemeSelector="showThemeSelector = false"  v-click-outside="collapseThemeSelector"/>
      </div>
    </div>
  </transition>
</template>

<script>
import ThemeSelector from '@/components/cmpThemeSelector'
import AnimatedLogo from '@/components/cmpAnimatedLogo'
import { mutations } from "@/store"

export default {
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
        document.getElementById(where).scrollIntoView({behavior: "smooth"})
      }
    }
  }
}
</script>

<style lang="scss">

.options {
  position: relative;
}

.theme-selector {
  position: absolute;
  top: 50px;
}

.nav-appear-class {
  transform: translateY(-100px);
}

.nav-appear-to-class {
  transition: all 1s;
  transform: translateY(0);
}

.link-appear-class {
  transition: all 1s;
  transform: scale(0);
  opacity: 0;
  transform-origin: center center;
}

.link-appear-to-class {
  transition: all 1s;
  transform: scale(1);
  opacity: 1;
  transform-origin: center center;
}

#nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: $fontPrimary;
  height: 80px;
  @include shadowNeu;
}

.nav-links, .nav-name {
  flex: 1 0 20%;
}

.nav-links {
  display: flex;
  justify-content: space-around;
}

#nav span {
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  margin-right: 10px;
  @media only screen and (max-width: 750px) {
    font-size: 16px;
  }
}

.selector-icon {
  width: 36px;
  height: 36px;
  margin-right: 2em;
  cursor: pointer;
  @media only screen and (max-width: 750px) {
    width: 30px;
    height: 30px;
  }
}

</style>