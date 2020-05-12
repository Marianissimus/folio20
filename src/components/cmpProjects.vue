<template>
  <div>
    <h1 v-if="projects && from === 'projects'" class="projects-header">
      <div v-if="!filter || filter === 'All'">Total {{ projects.length }} projects </div>
      <div v-else>{{ projects.length }} {{ filter }} projects </div>
    </h1>
    <transition-group name="projects" mode="out-in" v-if="projects" tag="div"
      :class="[ 'projects-container', from === 'home' ? 'home-projects' : 'projects-projects' ]">
      <project-card v-for="(project, index) in projects" :key="project.name" :card="project" :from="from" :index="index"/>
    </transition-group>
  </div>
</template>

<script>
import projects from '@/data/projects.js'
import ProjectCard from '@/components/cmpProjectCard'

export default {
  props: {
    howManyToFilter: {
      type: Number
    },
    from: {
      type: String
    },
    filter: {
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
  methods: {
    filterProjects (ev) {
      if (ev === 'All') {
        this.projects = projects
      } else {
        this.projects = projects.filter(el => el.tags.includes(ev))
      }
      this.$emit('projectsUpdated', this.projects.length)
    }
  }
}
</script>
<style lang="scss">
.heading {
  padding-top: 2rem;
  color: red;
  text-align: center;
}
.tablink {
  border-radius: 0;
  border: none;
  border-right: 1px solid gray;
  &:last-of-type {
    border: none;
  }
}

.projects-container {
  overflow: hidden;
  color: white;
}


.home-projects {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

.projects-projects {
  overflow: hidden;
  margin: 0 auto;
  width: 90vw;
  padding: 1em;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1.3em;
  justify-content: space-around;
  align-content: start;
  & .p-card-container {
    padding: 2rem;
    overflow: hidden;
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:nth-of-type(1),
    &:nth-of-type(4),
    &:nth-of-type(5),
    &:nth-of-type(8),
    &:nth-of-type(9),
    &:nth-of-type(12) {
      grid-column: span 3;
    }
  }
}

.projects-header {
  text-align: center;
  margin: 0 auto;
  & div {
    padding: 2rem;
    font-family: $fontSecondary;
    font-size: 3rem;
    font-weight: 100;
  }
}


// first animation trials; work in progress
.projects-enter-active, .projects-leave-active {
  transition: all .3s ease-out;
}

.projects-enter, .projects-leave-to {
  transform: scale(0.5) translateY(-200px);
  opacity:0;
}

// .projects-move {
//   transition: transform .3s;
// }


</style>
