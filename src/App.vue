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

<style scoped lang="scss">


</style>