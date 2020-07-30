<template>
  <div ref="logo" :style="{width: this.width + 'px'}" :class="['logo', isLogoAnimating ? 'center-logo' : '']">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M369.403 43.939l-113.404 113.4-113.402-113.4H0v424.122h151.385V266.815l93.987 93.987 10.627 10.586.122-.122.021.021 104.473-104.473v201.247H512V43.939z"/></svg>
  </div>
</template>

<script>
export default {
  props: [
    'width',
    'direction'
  ],
  mounted () {
    if (this.direction === 'forwards') {
      this.$refs.logo.classList.add('logo-icon-animation')
    } else {
      this.$refs.logo.classList.add('logo-reverse-animation')
    }
  }
}
</script>


<style lang="scss">
.logo {
  width: 100px;
  padding: 20px;
  margin: 0 auto;
   & path {
    fill: transparent;
    stroke-width: 10;
    stroke: #CCC;
    stroke-dasharray: 2500;
    stroke-dashoffset: 2500;
    animation-delay: .3s;
  }
}

.center-logo {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.logo-icon-animation {
  & path {
    animation: animate-logo 1.6s linear forwards;
  }
}

.logo-reverse-animation {
  & path {
    animation: reverse-logo .3s linear forwards;
    animation-delay: .4s;
  }
}


@keyframes reverse-logo {
  0% {
    opacity: 0;
    transform: scale(0);
    transform-origin: center center;
  }
  100% {
    opacity: 1;
    transform: scale(1);
    transform-origin: center center;
    fill: white;
    stroke-dashoffset: 0;
  }
}

@keyframes animate-logo {
  0% {
    stroke-dashoffset: 2500;
    fill: transparent
  }
  20% {
    stroke-dashoffset: 1000;
    fill: transparent;
  }
  35% {
    fill: transparent;
    stroke: #CCC;
  }
  50% {
    stroke: transparent;
    stroke-dashoffset: 0;
  }
  60% {
    stroke: transparent;
    stroke-dashoffset: 0;
  }
  80% {
    fill: white;
    opacity: 1;
  }
  90% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
    transform: scale(0);
    transform-origin: center center;
  }
}
</style>