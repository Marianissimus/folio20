<template>
  <div>
    <div v-if="projects">
      <project-card v-for="project in projects" :key="project.name" :card="project"></project-card>
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
  }
}
</script>
