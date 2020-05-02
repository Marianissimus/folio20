<template>

  <div v-if="from === 'home'" class="h-card-container">
    <div><span class="number">{{ '0' + JSON.parse(index+1) }}</span></div>
    <div :class="['h-card', bgColor]">
      <div class="main">
        <h1> {{ card.name }} </h1>
        <h3> {{ card.description }}</h3>
        <br>
        <a v-for="link in card.urls" :href="link.url" :key="link.url">
          {{ link.type }}
        </a>
      </div>
      <div class="img" v-bind:style="{ backgroundImage: 'url(' + card.pic + ')' }"
        :class="bgOverlay"
      >
      </div>
    </div>
  </div>

  <div v-else :class="['p-card-container', bgColor]">
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
    card: {
      type: Object
    },
    from: {
      type: String
    },
    index: {
      type: Number
    }
  },
  computed: {
    bgOverlay () {
      return 'blueOverlay'
    }
  },
  created () {
    // console.log(this.bgColor)
  }
}
</script>


<style scoped lang="scss">
// styling for the HOME view (landing page) here
// the projects VIEW styles are in the Views/Project

.h-card-container {
  position: relative;
  margin: 3rem auto;
  width: 60vw;
  min-width: 500px;
}

.h-card {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  & .main {
    flex-basis: 61.8%;
    flex: 1 0 61.8%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem 1.6rem 1.6rem;
    text-align: left;
     & h1 {
      font-size: 3rem;
      font-family: $fontTernary;
      font-weight: 100;
      margin: 1rem 1rem 1rem 0;
     }
     & h3 {
      font-size: 1.2rem;
      font-family: $fontSecondary;
      font-weight: 100;
      margin: 0 .8rem .8rem 0;
      line-height: 2rem;
     }
     & a {
      text-align: center;
      background-color: red;
      color: white;
      max-width: 100px;
      font-size: 1rem;
      padding: .8rem;
      text-decoration: none;
     }
   }
  & .img {
    flex: 0 0 38.2%;
    position: relative;
    }
}

.blueOverlay:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(111, 111, 111, .6);
}

.number {
  font-size: 5rem;
  font-family: $fontSecondary;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  top: 1.2rem;
  left: 1.6rem;
}

</style>
