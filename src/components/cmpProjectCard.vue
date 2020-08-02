<template>
  <div :class="from === 'home' ? 'h-card-container' : 'p-card-container'">
    <div v-if="from === 'home'">
      <span :class="['number', bgColor]">{{ '0' + JSON.parse(index+1) }}</span>
    </div>
    <div :class="['card', bgColor]">
      <div class="main" id="main">
        <div class="titleContainer">
          <h1 v-scrollanimation class="title">{{ card.name }}</h1>
          <div class="img-container" @click="showModal(card.pic)">
            <img :src="require('@/assets/images/projects/' + cardThumb)" class="img-container"
            v-scrollanimation
            />
          </div>
        </div>
        <div v-scrollanimation class="description">
          <p>{{ card.description }}</p>
        </div>
        <div class="links-container">
          <!-- url: actual link, type: browser, codepen, or github, index used for animation, order: irrelevant -->
          <div class="link" v-for="(url, type, index) in card.urls" :key="index"
            v-scrollanimation
            :style="{'transition-delay': index * 400 + 'ms'}"
            >
            <a :href="url" :class="['link-icon', type]"
            @mouseover="getHoverStart(type)"
            @mouseleave="getHoverEnd(type)"
            />
            <span class="tooltip" :name="type">{{ type }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mutations } from '@/store'
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
  },
  data () {
    return {
      isClicked: false
    }
  },
  computed: {
    cardThumb () {
      // the thumb format is "imagename_thumb.ext"; a thumb is 120x100px
      return this.card.pic.split('.')[0] + '_thumb.' + this.card.pic.split('.')[1]
    }
  },
  methods: {
    getHoverStart (link) {
      let el = 'span[name=' + link  + ']'
      this.$el.querySelector(el).classList.add('visibleTooltip')
    },
    getHoverEnd (link) {
      let el = 'span[name=' + link  + ']'
      this.$el.querySelector(el).classList.remove('visibleTooltip')
    },
    backToThumb () {
      this.isClicked = false
    },
    showModal(pic) {
      mutations.setModalImage(require('@/assets/images/projects/' + pic))
      mutations.showModal()
    },
    closeModal () {
      mutations.closeModal()
    }
  }
}
</script>

<style lang="scss">
/**** PROJECT CARD FOR BOTH Projects View and Home View ***/
.h-card-container {
  position: relative;
  max-width: 90vw;
  @media only screen and (min-width: 1000px) {
    max-width: 900px;
  }
  height: auto;
  // ANIMATIONS
  // animation classes from v-scrollanimation
 &.before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1s ease-in;
  }
  // animation from v-scrollanimation
  &.enter {
    opacity: 1;
    transform: translateY(0px);
  }
}


// common styles only cards in /home or /projects: .p.card, .h-card
.card {
  z-index: 1;
  @include smallBorder;
  @include shadowSmall;
  & .main {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    text-align: left;
    min-height: 500px;
     & .titleContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      @media only screen and (max-width: 600px) {
        flex-direction: column;
      }
      & .title {
        display: inline-block;
        white-space: wrap;
        font-size: 3rem;
        font-family: $fontTernary;
        font-weight: 100;
        padding-right: 10px;
        width: 100%;
        text-overflow: ellipsis;
        @media only screen and (max-width: 600px) {
          text-align: center;
          margin-bottom: 1.3rem;
        }
        // animation from v-scrollanimation
        &.before-enter {
          transform: scale(.7);
          transition: all 1s ease-in;
        }
        &.enter {
          transform: scale(1);
          transition: all 1s ease-in;
        }
      }
      & .img-container {
        width: 120px;
        height: 100px;
        min-width: 120px;
        display: inline-block;
        white-space: nowrap;
        @include shadowNeu;
        right: 0;
        z-index: 1;
        cursor: pointer;
        position: relative;
        &:before{
          z-index: 2;
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(1, 1, 1, .5);
          transition: all .3s ease;
        }
        &:hover:before {
          transition: all .3s ease;
          background-color: rgba(1, 1, 1, .7);
        }
        &:hover:after {
          background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='192.904' height='192.904'%3E%3Crect width='100%25' height='100%25' fill='none'/%3E%3Cg class='currentLayer'%3E%3Cg fill='%23fff'%3E%3Cpath d='M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 005.303 2.197 7.498 7.498 0 005.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z'/%3E%3Cpath d='M118.035 73.689H88.69V44.345c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5V73.69H44.346a7.5 7.5 0 00-7.5 7.5 7.5 7.5 0 007.5 7.5H73.69v29.346c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5V88.689h29.345a7.5 7.5 0 007.5-7.5 7.5 7.5 0 00-7.5-7.5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        &:after {
          content: '';
          z-index: 3;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: 3em;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='192.904' height='192.904'%3E%3Crect width='100%25' height='100%25' fill='none'/%3E%3Cg class='currentLayer'%3E%3Cg fill='lightgray'%3E%3Cpath d='M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 005.303 2.197 7.498 7.498 0 005.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z'/%3E%3Cpath d='M118.035 73.689H88.69V44.345c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5V73.69H44.346a7.5 7.5 0 00-7.5 7.5 7.5 7.5 0 007.5 7.5H73.69v29.346c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5V88.689h29.345a7.5 7.5 0 007.5-7.5 7.5 7.5 0 00-7.5-7.5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      }
     }
     & .description {
      flex: 1 0 auto;
      display: flex;
      align-items: center;
      @media only screen and (max-width: 600px) {
        margin-top: 1.3rem;
      }
        & p {
          @include fontBasic;
        }
      &.before-enter {
        transform: scale(.7);
        transition: all 1s ease-in;
      }
      // animation from v-scrollanimation
      &.enter {
        transform: scale(1);
        transition: all 1s ease-in;
      }
     }
     & .links-container {
      flex: 0 0 150px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
     }
     & .link {
        margin: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding: 2em 0;
         & a {
            padding: 1rem;
            @include shadowNeu;
            font-size: inherit;
          }
        // animation from v-scrollanimation
          &.before-enter {
            transform: rotate(30deg);
            transition: all 1s ease-in;
          }
          &.enter {
            transform: rotate(0);
            transition: all 1s ease-in;
          }
        & .link-icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 1.5em;
          height: 1.5em;
          background-color: transparent;
          transition: all .5s ease-in-out;
          background-repeat: no-repeat;
          background-size: 70%;
          background-position: center;
          &:hover {
            background-color: black;
            transition: all .5s ease-in-out;
          }
        }
        & .tooltip {
          padding: .7em;
          background-color: black;
          @include shadowNeu;
          border-radius: 3px;
          font-family: $fontSecondary;
          letter-spacing: 3px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          transition: transform 200ms ease, opacity 200ms;
          opacity: 0;
          pointer-events: none;
          &:after { /* this is the tooltip arrow */
              content: "";
              position: absolute;
              top: -18px;
              left: 50%;
              transform: translateX(-50%);
              border-width: 10px;
              border-style: solid;
              border-color: transparent transparent black transparent;
          }
        }
        & .visibleTooltip {
          transform: translateY(38px);
          opacity: 1;
          transition: transform 200ms ease-in-out, opacity 200ms;
        }
     }
   }
}

.number {
  font-size: 5rem;
  font-family: $fontSecondary;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(0, 0, 0, .2);
  position: relative;
  top: 1rem;
  left: 2rem;
}

</style>