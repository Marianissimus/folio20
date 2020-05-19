<template>
  <div>
    <h1 v-if="projects && from === 'projects'" class="projects-header">
      <div v-if="!filter || filter === 'All'">Total {{ projects.length }} projects </div>
      <div v-else>{{ projects.length }} {{ filter }} projects </div>
    </h1>
    <transition-group appear name="projects" mode="out-in" v-if="projects" tag="div"
      :class="[ 'projects-container', from === 'home' ? 'home-projects' : 'projects-projects' ]">
      <project-card v-for="(project, index) in projects" :key="project.name" :card="project" :from="from" :index="index"/>
    </transition-group>
    <div style="text-align: center"  v-if="from === 'home'" class="ctaNav">
      <router-link to="/projects" @click.native="updateProjects()">See All</router-link>
    </div>
    <div style="text-align: center"  v-else class="ctaNav">
      <router-link to="/">Back to Main Page</router-link>
    </div>
  </div>
</template>

<script>
import projects from '@/data/projects.js'
import ProjectCard from '@/components/cmpProjectCard'

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
    'project-card': ProjectCard
  },
  data () {
    return {
      projects: null,
      componentKey: 0
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
    updateProjects () {
      window.scrollTo({
        top: 0,
        left: 0
      })
    }
  }
}
</script>
<style lang="scss">
.ctaNav {
  padding: 3em;
}

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

// .projects-container {
//   overflow: hidden;
//   color: white;
// }

.home-projects {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

.projects-projects {
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    & .p-card-container {
      width: 60vw;
      max-width: 500px;
      margin: 2em auto;
    }
  }
  overflow: hidden;
  margin: 0 auto;
  width: 90vw;
  padding: 1em;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1.3em;
  justify-content: space-around;
  align-content: start;
  & .p-card-container {
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
