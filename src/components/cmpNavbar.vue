<template>
  <div id="nav">
    <span class="logo">Marian Vidoe
      <theme-selector />
    </span>
    <span>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/contact">Contact</router-link> |
    </span>
  </div>
</template>

<script>
import ThemeSelector from '@/components/cmpThemeSelector'
export default {
  components: {
    'theme-selector': ThemeSelector
  }
}
</script>

<style scoped lang="scss">
#nav {
  overflow: hidden;
  @include bgBlack;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Varela', sans-serif;
  font-size: 3rem;
  padding: $padding;
  margin: 0;
}

.logo {
  color: yellow;
}

#nav a {
  color: $linkcolor;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
