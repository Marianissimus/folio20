<template>
  <section id="pageNotFound">
    <section-header :title="'Page not found'" :fontSize="40" style="margin-top: 100px" />
    <btn-w-icon
      :beforeIcon="'arrow-left'" :afterIcon="'arrow-left'" :text="'Return to Main'" :direction="'right'" @click.native="goHome()"/>
  </section>
</template>

<script>
import sectionHeader from '@/components/cmpSectionHeader'

export default {
  components: {
    'section-header': sectionHeader
  },
  methods: {
    goHome () {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss">
  #pageNotFound {
    width: 100vw;
    height: 100vh;
  }
</style>