<template>
  <span class="theme-select">
    <button v-for="(background, index) in backgrounds" :key="index" @click="setbgColor(background)" :class="[background, bgColor === background? 'active-theme' : '']">
    </button>
    <button class="close-theme-selector" @click="$emit('closeThemeSelector')">
     <span>X</span>
    </button>
  </span>
</template>

<script>
import { mutations } from "@/store";
export default {
  data () {
    return {
      backgrounds: ['bgMoreBlue', 'bgBlue', 'bgRed', 'bgCyan', 'bgPurple']
    }
  },
  methods: {
    setbgColor: mutations.setbgColor
  }
}
</script>

<style scoped lang="scss">
  .theme-select {
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & button {
      margin: .5em 0;
      height: 1em;
      width: 1em;
      border-radius: 50%;
      border: 2px solid #999;
      cursor: pointer;
      transform-style: preserve-3d;
      outline:0;
      color: white;
      font-family: $fontSecondary;
      font-weight: 100;
      font-size: 1rem;
      padding: 1rem;
      &.active-theme {
        border: 2px solid #FFF;
      }
    }
    & .close-theme-selector {
      margin: .5em 0;
      cursor: pointer;
      background-color: black;
      width: 1em;
      height: 1em;
      position: relative;
      border-radius: 50%;
      & span {
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5em !important;
      }
    }
  }


</style>
