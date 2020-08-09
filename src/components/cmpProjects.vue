<template>
  <section :id="[from === 'home' ? 'homeprojects' : 'workprojects']">
    <section-header :title="'Projects'" v-if="from === 'home'" style="margin: 75px auto 40px auto;"/>
    <h1 v-if="projects && from === 'projects'" class="projects-header">
      <!-- HEADER to display no of projects -->
      <div v-if="!filter || filter === 'All'">Total {{ viewProjects.length }} projects </div>
      <div v-else>{{ viewProjects.length }} {{ filter }} projects </div>
    </h1>
    <!-- PROJECTS Group for both Home and More Projects view; use transition on filtering-->
    <transition-group appear name="projects" mode="out-in" v-if="viewProjects" tag="div"
      :class="[ 'projects-container', from === 'home' ? 'home-projects' : 'projects-projects' ]">
      <project-card v-for="(project, index) in viewProjects" :key="project.name" :card="project" :from="from" :index="index"/>
    </transition-group>
    <!-- end of projects component -->
  </section>
</template>

<script>
import ProjectCard from '@/components/cmpProjectCard'
import cmpSectionHeader from '@/components/cmpSectionHeader'

export default {
  props: {
    homeFilter: {
      type: String
    },
    from: {
      type: String
    },
    filter: {
      type: String
    },
    projects: {
      type: Array
    }
  },
  components: {
    'project-card': ProjectCard,
    'section-header': cmpSectionHeader
  },
  data () {
    return {
      viewProjects: null
    }
  },
  created () {
    this.viewProjects = this.projects.slice()
  },
  mounted () {
    if (this.homeFilter) {
      let filter = this.homeFilter
      this.viewProjects = this.viewProjects.filter(el => el[filter] && el[filter] === true)
    }
  },
  methods: {
    filterProjects (ev) {
      if (ev === 'All') {
        this.viewProjects = [... this.projects]
      } else {
        this.viewProjects = this.projects.filter(el => el.tags.includes(ev))
      }
      this.$emit('projectsUpdated', this.viewProjects.length)
    }
  }
}
</script>
