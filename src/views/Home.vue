<template>
  <div class='home'>
    <About />
    <Projects :homeFilter="'featured'" :from="'home'" id="homeprojects" >
    </Projects>
    <Contact />
  </div>
</template>

<script>
import Projects from '@/components/cmpProjects.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'

export default {
  name: 'Home',
  components: {
    Projects: Projects,
    About: About,
    Contact: Contact
  },
  mounted () {
    window.addEventListener('unload', this.scrollToTop)
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
