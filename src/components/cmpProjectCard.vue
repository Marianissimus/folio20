<template>
  <div v-if="from === 'home'" class="h-card-container">
    <div><span :class="['number', bgColor]">{{ '0' + JSON.parse(index+1) }}</span></div>
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
      >
        <div class="overlay" :class="bgColor"></div>
      </div>
    </div>
  </div>
  <div v-else :class="['p-card-container', bgColor]" >
    <h1 class="project-title"> {{ card.name }} </h1>
    <img :src="card.pic">
    <h3 class="project-description"> {{ card.description }}</h3>
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
  }
}
</script>


<style  lang="scss">
// styling for the HOME view (landing page) here
// the projects VIEW styles are in the Components/Projects

.h-card-container {
  position: relative;
  @include mainCard;
}

.h-card {
  z-index: 2;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  @include neuShadow;
  position: relative;
  & .main {
    flex: 1 0 60%;
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
      margin: 0 .8rem .8rem 0;
      @include fontBasic;
     }
   }
  & .img {
      position: relative;
      flex: 1 0 30%;
    }
  & .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 150%;
    opacity: .6;
    transition: all ease-in-out .2s;
    &:hover {
     opacity: 0.1;
    }
  }
}


.number {
  font-size: 5rem;
  font-family: $fontSecondary;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(0, 0, 0, .4);
  position: relative;
  top: 1rem;
  left: 1.6rem;
  z-index: 1;
}

// projects card
.p-card-container {
  @include neuShadow;
  & .project-title {
      font-size: 3rem;
      font-family: $fontTernary;
      font-weight: 100;
      margin: 1rem 1rem 1rem 0;
  }
  & .project-description {
    font-size: 1.2rem;
    font-family: $fontSecondary;
    font-weight: 100;
    margin: 1rem .8rem .8rem 0;
    line-height: 2rem;
  }
  & img {
    max-width: 100px;
    max-height: 100px;
  }
  & a {
    padding: 1rem;
    max-width: 5rem;
    text-align: center;
  }
}

</style>
