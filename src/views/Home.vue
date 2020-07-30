<template>
  <div class='home'>
    <About />
    <transition name="landing" v-if="!isLogoAnimating">
      <Projects v-if="projects" :homeFilter="'featured'" :projects="projects" :from="'home'">
      </Projects>
    </transition>
    <transition name="landing" v-if="!isLogoAnimating">
      <Stack />
    </transition>
    <transition name="landing" v-if="!isLogoAnimating">
      <Contact />
    </transition>
    <back-to-top-btn />
  </div>
</template>

<script>
import Projects from '@/components/cmpProjects.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Stack from '@/views/Stack.vue'
import cmpBackToTopBtn from '@/components/cmpBackToTopBtn'
import { db } from '@/firebaseInit'
import { mutations } from "@/store"

export default {
  name: 'Home',
  components: {
    Projects: Projects,
    About: About,
    Contact: Contact,
    Stack: Stack,
    'back-to-top-btn': cmpBackToTopBtn
  },
  data () {
    return {
      projects: null,
      isScrolledEnough: false
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
      localStorage.setItem('projects', JSON.stringify(testProjects))
    })
    .catch(error => console.log("Error getting document:", error) )
    window.addEventListener('unload', this.scrollToTop)
  },
  updated () {
    if (this.idInHomeView) {
      // smooth scroll to id if click on link from another view
      document.getElementById(this.idInHomeView).scrollIntoView({behavior: "smooth"})
      mutations.setGoToIdInHomeView(null)
    }
  },
  beforeDestroy () {
    window.removeEventListener('unload', this.scrollToTop)
  },
  methods: {
    scrollToTop () {
      window.scrollTo({
        top: 0,
        left: 0
      })
    }
  }
}
</script>
