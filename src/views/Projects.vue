<template>
  <div>
    {{ msg }}
    <div v-if="projects">
      <project-card v-for="project in projects" :key="project.name" :card="project"></project-card>
    </div>
  </div>
</template>

<script>
import projects from '@/data/projects.js'
import ProjectCard from '@/components/ProjectCard'

export default {
  components: {
    'project-card': ProjectCard
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