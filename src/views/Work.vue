<template>
  <div>
    <div :class="['heading', 'stack-container', bgColor]">
      <button class="arrow arrow-left hide-big-screen" @click="scrollNavbar('left')"></button>
      <div class="heading-links" ref="tabs">
        <button :class="['tablink', selected === 'All' ? 'active' : '']" @click="filter('All')">All</button>
        <button v-for="(tag, index) in tags" :key="index" :class="['tablink', selected === tag ? 'active' : '']" @click="filter(tag)">
          {{ tag }}
        </button>
      </div>
      <button class="arrow arrow-right hide-big-screen" @click="scrollNavbar('right')"></button>
    </div>
    <projects-comp :projects="projects" ref="projectsComp" :from="'projects'" :filter="currentFilter" />
    <btn-w-icon :beforeIcon="'arrow-left'" :afterIcon="'arrow-left'" :text="'Return to Main'" :direction="'right'" @click.native="goHome()" style="margin-bottom: 60px" aria-label="Go to Main Page"/>
  </div>
</template>

<script>
import Projects from '@/components/cmpProjects'
import { mutations } from "@/store"

export default {
  components: {
    'projects-comp': Projects
  },
  data () {
    return {
      currentFilter: null,
      tags: [],
      selected: 'All',
      projects: []
    }
  },
  created () {
    this.projects = JSON.parse(localStorage.getItem('projects'))
    this.getTags()
  },
  methods: {
    goHome () {
      this.$emit('btnWasClicked')
      mutations.setGoToIdInHomeView('goToProjBtn')
      this.$router.push('/')
    },
    filter (event) {
      this.currentFilter = event
      this.$refs.projectsComp.filterProjects(event)
      this.selected = event
    },
    scrollNavbar (dir) {
      if (dir === 'right') {
        this.$refs.tabs.scrollLeft += 100
      }
      else {
        this.$refs.tabs.scrollLeft -= 100
      }
    },
    getTags (minimum = 2) {
      this.tags = []
      // I want to display only tags with at least 'minimum' amount of projects
      // I also want to sort them by no. of projects, any other sorting seems irrelevant
      // I may develop this to get "minumum" val from a store.js, or options component

      // filter all unique tags
      let allTags = []
      this.projects.forEach(el => el.tags.map(item => allTags.includes(item) ? '' : allTags.push(item)))

      // get no of occurrances
      let countedTags = []
      allTags.forEach(el => {
        let obj = {
          name: el,
          count: this.projects.filter(project => project.tags.includes(el)).length
        }
        if (obj.count < minimum) return
        else {
          countedTags.push(obj)
        }
      })
      // // Sort tags by no of projects
      let sorted = countedTags.sort(function(a, b){
        return b.count - a.count;
      })

      sorted.map(el => this.tags.push(el.name))
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  display: flex;
  max-width: 90vw;
  margin: 0 auto;
  margin-top: calc(3em + 80px); // 80px height of navbar
  padding: 1em;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin-top: 3em;
  }
}

.heading-links {
  flex: 1;
  height: 4rem;
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
  scroll-behavior: smooth;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  webkit-scrollbar: hide;
  justify-content: center;
  @media only screen and (max-width: 1200px) {
    justify-content: flex-start;
  }
}

.tablink {
  flex: 0;
  color: white;
  font-family: $fontSecondary;
  font-weight: 100;
  font-size: 1rem;
  padding: 1rem;
  margin-right: 2px;
  background-color: transparent;
  font-size: 1.5em;
  transition: background-color .5s ease-in-out;
  &:last-of-type {
    margin-right: 0;
  }
}

.active {
  transition: background-color .5s ease-in-out;
  background-color: black;
  color: white;
  box-shadow: none;
}

.arrow {
  flex: 0;
  padding: 1.5em;
  background-size: 2em;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(1, 1, 1, .5);
  color: white;
  margin-right: 5px;
  &:nth-of-type(2) {
    margin-left: 5px;
    margin-right: 0;
  }
}

.hide-big-screen {
  @media only screen and (min-width: 1200px) {
    display: none;
  }
}

</style>