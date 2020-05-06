<template>
  <div class="home">
<!--     <About/> -->
    <Projects :howManyToFilter='4' :from="'home'"></Projects>
    <Contact />
  </div>
</template>

<script>
import Projects from '@/components/cmpProjects.vue'
// import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'

export default {
  name: 'Home',
  components: {
    Projects: Projects,
    // About: About,
    Contact: Contact
  }
}
</script>

