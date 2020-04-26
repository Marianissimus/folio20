<template>
  <div id="nav">
    <span class="logo">Marian Vidoe</span>
    <span>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/contact">Contact</router-link> |
    </span>
  </div>
</template>

<style scoped lang="scss">
#nav {
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-family: 'Varela', sans-serif;
  padding: $padding;
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