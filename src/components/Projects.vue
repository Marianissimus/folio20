<template>
  <div>
    <div v-if="filter" style="color:red">{{ filter }}</div>
    <transition name="fade">
      <div v-if="projects"
      :class="[ 'projects-container', bgColor, from === 'home' ? 'home-projects' : 'projects-projects' ]">
        <project-card v-for="(project, index) in projects" :key="project.name" :card="project" :from="from" :index="index"/>
      </div>
    </transition>
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
    }
  }
}
</script>

<style scoped lang="scss">
.projects-container {
  width: 100vw;
  overflow: hidden;
  color: white;
  height: 100%;
}

.home-projects {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.projects-projects {
  margin: 1em auto;
  width: 90vw;
  border: 5px solid pink;
  display: grid;
  grid-gap: 20px;
  padding: 1em;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-template-rows: auto auto auto auto;
  justify-content: space-around;
  align-content: start;
  & .p-card-container {
    border: 1px solid white;
    padding: 1rem;
    overflow: hidden;
    &:nth-of-type(1),
    &:nth-of-type(4) {
      grid-column: span 2;
    }
    &:nth-of-type(3) {
      grid-row: span 2;
    }
    &:nth-of-type(5) {
      grid-row: span 2;
    }
    &:nth-of-type(8) {
      grid-row: span 2;
    }
    &:nth-of-type(11) {
      grid-row: span 2;
      grid-column: span 2;
    }
  }
}


</style>
