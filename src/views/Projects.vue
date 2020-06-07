<template>
  <div>
    <div class="heading">
      <button :class="['tablink', selected === 'All' ? 'active' : '']" @click="filter('All')">All</button>
      <button v-for="(tag, index) in tags" :key="index" :class="['tablink', selected === tag ? 'active' : '']" @click="filter(tag)">
        {{ tag }}
      </button>
    </div>
    <projects-comp ref="projectsComp" :from="'projects'" :filter="currentFilter" />
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import Projects from '@/components/cmpProjects'
import projects from '@/data/projects.js'

export default {
  components: {
    'projects-comp': Projects
  },
  data () {
    return {
      currentFilter: null,
      tags: [],
      selected: 'All'
    }
  },
  mounted () {
    this.getTags()
  },
  methods: {
    filter (event) {
      this.currentFilter = event
      this.$refs.projectsComp.filterProjects(event)
      this.selected = event
    },
    getTags (minimum = 2) {
      this.tags = []
      // I want to display only tags with at least 'minimum' amount of projects
      // I also want to sort them by no. of projects, any other sorting seems irrelevant
      // I may develop this to get "minumum" val from a store.js, or options component

      // filter all unique tags
      let allTags = []
      projects.forEach(el => el.tags.map(item => allTags.includes(item) ? '' : allTags.push(item)))

      // get no of occurrances
      let countedTags = []
      allTags.forEach(el => count(el))
      function count(el) {
        let obj = {
          name: el,
          count: projects.filter(project => project.tags.includes(el)).length
        }
        if (obj.count < minimum) return
        else {
          countedTags.push(obj)
        }
      }
      // Sort tags by no of projects
      let sorted = countedTags.sort(function(a, b){
        return b.count - a.count;
      })

      sorted.map(el => this.tags.push(el.name))
    }
  }
}
</script>

<style lang="scss">

</style>