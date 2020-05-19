<template>
  <div :class="[bgColor, 'home']">
    <About/>
    <Projects :homeFilter="'featured'" :from="'home'"></Projects>
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
  }
}
</script>
