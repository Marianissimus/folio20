<template>
  <div class="big-animation" v-if="isLogoAnimating">
    <animated-logo :direction="'forwards'"/>
  </div>
  <div class='home' v-else>
    <transition :name="aboutTransition" appear>
      <About/>
    </transition>
    <transition name="landing">
      <Projects v-if="projects" :homeFilter="'featured'" :projects="projects" :from="'home'">
      </Projects>
    </transition>
    <btn-w-icon
      id="goToProjBtn"
      :beforeIcon="'arrow-right'" :afterIcon="'arrow-right'" :text="'More Projects'" :direction="'right'" @click.native="goToProjects()" aria-label="Go To Projects Page"/>
    <transition name="landing">
      <Stack />
    </transition>
    <transition name="landing">
      <Contact />
    </transition>
  </div>
</template>

<script>
import Projects from '@/components/cmpProjects.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Stack from '@/views/Stack.vue'
import { db } from '@/firebaseInit'
import { mutations } from "@/store"
import AnimatedLogo from '@/components/cmpAnimatedLogo'

export default {
  name: 'Home',
  components: {
    Projects: Projects,
    About: About,
    Contact: Contact,
    Stack: Stack,
    'animated-logo': AnimatedLogo,
  },
  data () {
    return {
      projects: null
    }
  },
  computed: {
    aboutTransition () {
      // apply shorter transition if re-route from a different view
      if (this.idInHomeView) {
        return 'landing'
      }
      return 'aboutfirst'
    }
  },
  created () {
    db.collection("projects")
    .orderBy("position", "asc")
    .get()
    .then((querySnapshot) => {
      const testProjects = []
      querySnapshot.forEach(doc => {
        testProjects.push(doc.data())
      })
      this.projects = testProjects
      sessionStorage.setItem('projects', JSON.stringify(testProjects))
    })
    .catch(error => console.log("Error getting document:", error) )
    window.addEventListener('unload', this.scrollToTop)
  },
  mounted () {
    const savedBkColor = sessionStorage.getItem('MVbackgroundColor') || null
    if(savedBkColor) this.setbgColor(savedBkColor)
    setTimeout (() => mutations.setLogoAnimating(false), 2000)
  },
  updated () {
    if (this.idInHomeView) {
      this.scrollToWherever()
    }
  },
  beforeDestroy () {
    mutations.setGoToIdInHomeView(null)
    window.removeEventListener('unload', this.scrollToTop)
  },
  methods: {
    setbgColor: mutations.setbgColor,
    async scrollToWherever() {
     let el = await document.getElementById(this.idInHomeView)
     el.scrollIntoView()
    },
    scrollToTop () {
      window.scrollTo({
        top: 0,
        left: 0
      })
    },
    goToProjects () {
      this.$router.push('/projects')
    }
  }
}
</script>
