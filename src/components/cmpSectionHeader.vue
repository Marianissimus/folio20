<template>
  <div class="sectionTitle">
    <span class="sectionTitleText" :style="{fontSize: fontSize + 'px'}">
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['title', 'fontSize']
}
</script>

<style lang="scss">
.sectionTitle {
  max-width: 950px;
  overflow: hidden;
  margin: 80px auto;
  & .sectionTitleText {
    font-family: $fontTernary;
    font-size: 4rem;
    font-weight: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    padding: 10px;
    @include shadowNeu;
    &:before, &:after {
      content: '';
      display: block;
      height: 1px;
      width: 50%;
    }
    &:before{
      background-color: red;
      background: linear-gradient(to right, rgba(240,240,240,0), #fff);
      margin-right: 4vh;
      margin-left: 1em;
    }
    &:after{
      background-color: red;
      background: linear-gradient(to left, rgba(240,240,240,0), #fff);
      margin-left: 4vh;
      margin-right: 1em;
    }
  }
}
</style>