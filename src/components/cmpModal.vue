<template>
  <div class="modal">
    <button class="close-button" @click="close">
     <span>X</span>
    </button>
    <div v-if="modalImage" class="modal-image" :style="{ backgroundImage: 'url(' + modalImage + ')' }">
    </div>
  </div>
</template>

<script>
import { mutations } from '@/store'
export default {
  name: 'modal',
  data () {
   return {
      modalHeader: true,
      modalFooter: false,
    }
  },
  methods: {
    close () {
      mutations.closeModal()
    }
  }
}
</script>

<style lang="scss">
  .modal {
    position: fixed;
    z-index: 3000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    background-color: rgba(1, 1, 1, .6);
  }

  .modal-image {
    z-index: 4000;
    position: absolute;
    top: 5vh;
    left: 5%;
    width: 90%;
    height: 100%;
    max-height: 90%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }

  .close-button {
    z-index: 5000;
    position: absolute;
    top: 40px;
    right: 5%;
    background-color: black;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    & span {
      position:absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 30px;
      color: #FFF;
    }
  }


 .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
    transition: all .5s ease;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }


</style>