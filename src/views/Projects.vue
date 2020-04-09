<template>
  <div>
    {{ msg }}
    <div v-if="projects">
      <h3>A total of {{ projects.length }} projects </h3>
      <projects-comp :howManyToFilter="projects.length"></projects-comp>
    </div>
  </div>
</template>

<script>
import projects from '@/data/projects.js'
import Projects from '@/components/Projects'

export default {
  components: {
    'projects-comp': Projects
  },
  data () {
    return {
      msg: 'this is projects message',
      projects: null
    }
  },
  created () {
    this.projects = projects
  }
}
</script>
