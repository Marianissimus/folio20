<template>
  <div class="sectionTitle">
    <span class="sectionTitleText">
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss">
.sectionTitle {
  width: 350px;
  margin: 80px auto 0 auto;
  text-align: center;
  @include smallBorder;
  text-decoration: none;
  font-family: $fontSecondary;
  padding: 20px;
  overflow: hidden;
  text-align: center;
  & .sectionTitleText {
    font-size: 30px;
  }
}
</style>