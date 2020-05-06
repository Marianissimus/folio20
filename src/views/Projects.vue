<template>
  <div :class="bgColor">
    <div class="heading">
      <button @click="filter($event)">All</button>
      <button @click="filter($event)">JavaScript</button>
      <button @click="filter($event)">jQuery</button>
      <button @click="filter($event)">Bootstrap</button>
      <button @click="filter($event)">responsive</button>
      <button @click="filter($event)">CSS</button>
      <button @click="filter($event)">anime.js</button>
    </div>
    <projects-comp ref="projectsComp" :howManyToFilter="12" :from="'projects'" :filter="currentFilter" />
  </div>
</template>

<script>
import Projects from '@/components/cmpProjects'

export default {
  components: {
    'projects-comp': Projects
  },
  data () {
    return {
      msg: 'this is projects message',
      currentFilter: null,
    }
  },
  methods: {
    filter (event) {
      this.currentFilter = event.target.innerText
      this.$refs.projectsComp.filterProjects(event.target.innerText)
    }
  }
}
</script>

<style scoped lang="scss">
.heading {
  padding-top: 2rem;
  color: red;
  text-align: center;
}
</style>