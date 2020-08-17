<template>
  <transition name="fade">
    <button id="back-to-top" @click="scrollToTop" v-show="showButton" aria-label="Back To Top">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="30" height="30"
      viewBox="0 0 171 171"
      style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,171.99728v-171.99728h171.99728v171.99728z" fill="none"></path><g fill="#ffffff"><path d="M51.3,10.84781l-42.45609,42.4561c-1.78686,1.71559 -2.50665,4.26314 -1.88176,6.66015c0.62488,2.39701 2.4968,4.26892 4.8938,4.8938c2.39701,0.62488 4.94456,-0.0949 6.66015,-1.88177l25.94391,-25.9439v92.92781c0,15.02976 12.33024,27.36 27.36,27.36h85.5c2.46675,0.03489 4.7612,-1.26113 6.00475,-3.39177c1.24356,-2.13064 1.24356,-4.76582 0,-6.89646c-1.24356,-2.13064 -3.538,-3.42666 -6.00475,-3.39177h-85.5c-7.638,0 -13.68,-6.042 -13.68,-13.68v-92.92781l25.94391,25.9439c1.71559,1.78689 4.26315,2.50669 6.66017,1.88181c2.39702,-0.62488 4.26895,-2.4968 4.89383,-4.89383c0.62488,-2.39702 -0.09493,-4.94458 -1.88181,-6.66017z"></path></g></g></svg>
    </button>
  </transition>
</template>

<script>
export default {
  props: ['showButton'],
  methods: {
  scrollToTop () {
      window.scrollTo({
        top: 0,
        left: 0
      })
    }
  }
}
</script>

<style lang="scss">
#back-to-top {
  color: white;
  background-color: rgba(1, 1, 1, .5);
  position: fixed;
  width: 50px;
  height: 50px;
  overflow: hidden;
  bottom: 1em;
  right: 1em;
  z-index: 10;
}

#back-to-top:hover{
  background-color: black;
}


</style>