<template>
  <div>
    <section-header :title="'Projects'" v-if="from === 'home'"/>
    <h1 v-if="projects && from === 'projects'" class="projects-header">
      <!-- HEADER to display no of projects -->
      <div v-if="!filter || filter === 'All'">Total {{ projects.length }} projects </div>
      <div v-else>{{ projects.length }} {{ filter }} projects </div>
    </h1>
    <!-- PROJECTS Group for both Home and More Projects view; use transition on filtering-->
    <transition-group appear name="projects" mode="out-in" v-if="projects" tag="div"
      :class="[ 'projects-container', from === 'home' ? 'home-projects' : 'projects-projects' ]">
      <project-card v-for="(project, index) in projects" :key="project.name" :card="project" :from="from" :index="index"/>
    </transition-group>
    <!-- navigation button from Home to More Projects view -->
    <div>
      <btn-w-icon v-if="from === 'home'"
      :beforeIcon="'arrow-right'" :afterIcon="'arrow-right'" :text="'See All Projects'" :direction="'right'" @click.native="goToProjects()"/>
      <btn-w-icon v-if="from === 'projects'"
      :beforeIcon="'arrow-left'" :afterIcon="'arrow-left'" :text="'Return to Main'" :direction="'right'" @click.native="goHome()"/>
    </div>
    <!-- end of projects component -->
  </div>
</template>

<script>
import projects from '@/data/projects.js'
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
    }
  },
  components: {
    'project-card': ProjectCard,
    'section-header': cmpSectionHeader
  },
  data () {
    return {
      projects: null
    }
  },
  mounted () {
    if (this.homeFilter) {
      let filter = this.homeFilter
      this.projects = projects.filter(el => el[filter] && el[filter] === true)
    }
    else {
      this.projects = projects
    }
  },
  methods: {
    filterProjects (ev) {
      if (ev === 'All') {
        this.projects = projects
      } else {
        this.projects = projects.filter(el => el.tags.includes(ev))
      }
      this.$emit('projectsUpdated', this.projects.length)
    },
    goToProjects () {
      this.$router.replace('/projects')
      window.scrollTo({
        top: 0,
        left: 0
      })
    },
    goHome () {
      this.$router.replace('/')
    }
  }
}
</script>
