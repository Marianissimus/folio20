<template>
  <div>
    <h1 v-if="projects && from === 'projects'" class="projects-header">
      <div v-if="!filter || filter === 'All'">Total {{ projects.length }} projects </div>
      <div v-else>{{ projects.length }} {{ filter }} projects </div>
    </h1>
    <transition-group name="projects" mode="out-in" v-if="projects" tag="div"
      :class="[ 'projects-container', from === 'home' ? ['home-projects', bgColor] : 'projects-projects' ]">
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

<style scoped lang="scss">
.projects-container {
  width: 100vw;
  overflow: hidden;
  color: white;
  max-height: 100%;
}

.home-projects {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.projects-projects {
  background-color: white;
  margin: 0 auto;
  width: 90vw;
  display: grid;
  grid-gap: 20px;
  padding: 1em;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: space-around;
  align-content: start;
  & .p-card-container {
    padding: 2rem;
    overflow: hidden;
    &:nth-of-type(1),
    &:nth-of-type(4),
    &:nth-of-type(11) {
      grid-column: span 2;
    }
    // &:nth-of-type(3),
    // &:nth-of-type(5),
    // &:nth-of-type(8)  {
    //   grid-row: span 2;
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: space-between;
    // }
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
