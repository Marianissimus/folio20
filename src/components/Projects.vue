<template>
  <div>
    <div v-if="projects" :class="computedContainerClass">
      <project-card v-for="project in projects" :key="project.name" :card="project" class="project"></project-card>
    </div>
  </div>
</template>

<script>
import projects from '@/data/projects.js'
import ProjectCard from '@/components/ProjectCard'

export default {
  props: {
    howManyToFilter: {
      type: Number
    },
    from: {
      type: String
    }
  },
  components: {
    'project-card': ProjectCard
  },
  data () {
    return {
      projects: null
    }
  },
  mounted () {
    if (this.howManyToFilter) {
      this.projects = projects.slice(0, this.howManyToFilter)
    }
  },
  computed: {
    computedContainerClass () {
      let classes = ['projects-container']
      this.from === 'home' ? classes.push('home-projects') : classes.push('projects-projects')
      return classes
    }
  }
}
</script>

<styles lang="scss">


</styles>