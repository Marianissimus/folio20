<template>
  <section id="about" :class="bckColor">
    <h1>Front end developer</h1>
    <h2>& copywriter</h2>
    <button @click="setBckColor('bckBlue')">blue</button>
    <button @click="setBckColor('bckRed')">red</button>
  </section>
</template>

<script>
import { store, mutations } from "@/store";
export default {
  computed: {
    bckColor() {
      return store.bckColor;
    }
  },
  methods: {
    setBckColor: mutations.setBckColor
  }
}
</script>

<style scoped lang="scss">
  #about {
    line-height: 3rem;
    text-align: left;
    padding-left: 3rem;
  }

  #about h1 {
    font-size: 4rem;
    line-height: 5rem;
  }
  #about h2 {
    font-size: 2.5rem;
  }
</style>