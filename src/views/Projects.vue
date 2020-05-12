<template>
  <div :class="bgColor">
    <div class="heading">
      <button class="tablink" @click="filter($event)">All</button>
      <button class="tablink" @click="filter($event)">JavaScript</button>
      <button class="tablink" @click="filter($event)">jQuery</button>
      <button class="tablink" @click="filter($event)">Bootstrap</button>
      <button class="tablink" @click="filter($event)">responsive</button>
      <button class="tablink" @click="filter($event)">CSS</button>
      <button class="tablink" @click="filter($event)">anime.js</button>
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
