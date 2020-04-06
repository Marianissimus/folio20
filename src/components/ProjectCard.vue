<template>
  <div>
    <h1> {{ card.name }} </h1>
    <img :src="card.pic">
    <h3> {{ card.description }}</h3>
    <h4>See on:</h4>
    <a v-for="link in card.urls" :href="link.url" :key="link.url">
      {{ link.type }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    card: Object
  }
}
</script>
