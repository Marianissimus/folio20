<template>
  <section class="headerContainer">
    <div id="about">
      <h1>Front end developer<br>
        & copywriter</h1>
      <h3>
        I love to write code, write copy, <br> and make memories on sunny beaches.
      </h3>
    </div>
  </section>
</template>

<style lang="scss">
  .headerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #about {
    @include mainCard;
    @include neuShadow;
    margin-top: 3rem;
    height: 60vh;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: justify-content;
    text-align: center;
  }

  #about h1 {
    font-size: 4rem;
    line-height: 4rem;
    font-family: $fontSecondary;
  }
  #about h3 {
    font-size: 2.5rem;
    line-height: 3rem;
    font-family: $fontSecondary;
  }

  #about h3 {
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
</style>
