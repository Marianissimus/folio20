<template>
  <section id="about" :class="bgColor" class="headerContainer">
    <div>
      <h1>Front end developer</h1>
      <h2>& copywriter</h2>
      <h3>I think I need some longer text in here
        <br>
          Maybe even two lines? IDK
      </h3>
      <h3>
        <button @click="setbgColor('bckBlue')">blue</button>
        <button @click="setbgColor('bckRed')">red</button>
      </h3>
    </div>
  </section>
</template>

<script>
import { mutations } from "@/store";
export default {
  methods: {
    setbgColor: mutations.setbgColor
  }
}
</script>

<style scoped lang="scss">
  #about {
    text-align: left;
    padding-left: 3rem;
  }

  .headerContainer {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  #about h1 {
    font-size: 4rem;
    line-height: 5rem;
  }
  #about h2 {
    font-size: 2.5rem;
  }

  #about h3 {
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
</style>