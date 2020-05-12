<template>
  <span class="theme-select">
    <button v-for="background in backgrounds" :key="background" @click="setbgColor(background)" :class="background">
    </button>
  </span>
</template>

<script>
import { mutations } from "@/store";
export default {
  data () {
    return {
      backgrounds: ['bgBlue', 'bgRed', 'bgGreen', 'bgPurple']
    }
  },
  methods: {
    setbgColor: mutations.setbgColor
  }
}
</script>

<style scoped lang="scss">
  .theme-select {
    width: 100%;
    height: 100px;
    display: flex;
    & button {
      flex: 0 0 3rem;
      height: 3rem;
      margin: 1rem;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      transform-style: preserve-3d;
      outline:0;
      &:after {
        position: absolute;
        top: -10%;
        left: -10%;
        content: '';
        width: 120%;
        height: 120%;
        border-radius: 50%;
        background-color: white;
        transform: translateZ(-1px);
      }
    }
  }

</style>
