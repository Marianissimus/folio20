<template>
  <section class='about-view' id="about">
    <div id="profile">
      <div class="profile-text">
        <h3>
          Hi, I’m Marian, a
        </h3>
        <h1>
          Front End Developer
        </h1>
        <ul class="profile-list">
          <li>
            I create web apps and sites that tell stories and solve problems.
          </li>
          <li>
            I make them with fast and modern <span class="about-link" @click="scrollTo('stack')">technologies</span> such as Vue.js, JavaScript, Bootstrap and <span style="font-size: inherit" @click="$router.push('/login')">more</span>.
          </li>
          <li>
            Also, as a former copywriter, I am a creative programmer that likes to <span class="about-link" @click="scrollTo('contact')">communicate</span>.
          </li>
        </ul>
      </div>
      <div class="prof-img-container">
        <div class="profile-buttons">
          <button @click="scrollTo('contactForm')" aria-label="Contact me">Contact me!</button>
          <button @click="scrollTo('homeprojects')" aria-label="Go to work">See Work</button>
        </div>
        <avatar class="profile-picture" :fill="bgColor"/>
      </div>
    </div>
  </section>
</template>

<script>

import Avatar from '@/components/cmpAvatar'
export default {
  components: {
    'avatar': Avatar
  },
  data () {
    return {
      isImageHovered: false
    }
  },
  methods: {
    scrollTo (where) {
       document.getElementById(where).scrollIntoView({behavior: "smooth"})
    }
  }
}
</script>


<style lang="scss">
  .about-view {
    margin: 0 auto 0 auto;
    margin-top: calc(3em + 80px);
    width: 90vw;
    max-width: 900px;
      @media only screen and (max-width: 600px) {
      margin-top: 3em;
    }
  }

  .about-link {
    font: inherit;
    text-decoration: underline;
    cursor: pointer;
  }

  #profile {
    min-height: 90vh;
    @include shadowNeu;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    padding: 2rem;
    overflow: hidden;
  }

  .prof-img-container {
    display: flex;
    flex-direction: column;
     @media only screen and (min-width: 850px) {
        flex-direction: row;
      }
      & .profile-buttons {
        flex: 1 0 50%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 850px) {
          margin: 1rem;
        }
        & button {
          color: white;
          font-family: $fontTernary;
          font-weight: 100;
          font-size: 1rem;
          padding: 1rem;
          margin-right: 2px;
          background-color: rgba(1, 1, 1, .5);
          font-size: 1.5em;
          transition: background-color .5s ease-in-out;
          box-shadow:
          2px 2px 4px 0 rgba(0, 0, 0, 0.1),
          2px -2px 4px 0 rgba(255, 255, 255, 0.1);
          &:hover {
            background-color: black;
            transition: background-color .5s ease-in-out;
          }
          &:first-of-type {
            margin-right: 2em;
          }
        }
      }
      & .profile-picture {
        flex: 1 0 300px;
        height: auto;
        margin-top: 1em;
      }
  }

  .profile-text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: justify-content;
    text-align: left;
    & h1 {
      font-size: 4rem;
      line-height: 4rem;
      font-family: $fontPrimary;
      padding: 1rem 0;
      @media only screen and (max-width: 600px) {
        font-size: 2.5rem;
      }
    }
    & h3 {
      font-size: 1.2rem;
      line-height: 2rem;
      font-family: $fontSecondary;
      font-weight: 100;
    }
    & .profile-list {
      line-height: 2rem;
      font-family: $fontSecondary;
      font-weight: 200;
      padding-bottom: 1rem;
      @media only screen and (max-width: 600px) {
        line-height: 1.8rem;
        list-style-type: disc;
      }
      & li {
        font-size: 1.2rem;
      }
    }
  }
</style>
