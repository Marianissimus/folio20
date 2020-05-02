<template>
  <div id="app">
    <Navbar />
    <transition name="bounce">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar: Navbar
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin: 0;
  padding: 0;
}

</style>