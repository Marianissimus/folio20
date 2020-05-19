<template>
  <!-- home page / project card-->
  <div v-if="from === 'home'" class="h-card-container" v-scrollanimation>
    <div><span :class="['number', bgColor]">{{ '0' + JSON.parse(index+1) }}</span></div>
    <div :class="['h-card', bgColor]">
      <div class="main" id="main">
        <div class="titleContainer">
          <h1 v-scrollanimation class="title">{{ card.name }}</h1>
          <div v-scrollanimation class="img-container" v-bind:style="{ backgroundImage: 'url(' + card.pic + ')' }"></div>
        </div>
        <div v-scrollanimation class="description">
          <p>{{ card.description }}</p>
        </div>
        <div class="linksContainer">
          <div class="link" v-for="(link, index) in card.urls" :key="link.url"
          v-scrollanimation
          :style="{'transition-delay': index * 400 + 'ms'}"
          >
            <a
              :href="link.url" :class="['link-icon', link.type]"
              @mouseover="getHoverStart(link.type)"
              @mouseleave="getHoverEnd(link.type)"
             />
            <span class="tooltip" :name="link.type">{{ link.type }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Projects page / project card-->
  <div v-else class="p-card-container" >
    <div :class="['p-card', bgColor]">
      <div class="main" id="main">
        <div class="titleContainer">
          <h1 v-scrollanimation class="title">{{ card.name }}</h1>
          <div v-scrollanimation class="img-container" v-bind:style="{ backgroundImage: 'url(' + card.pic + ')' }"></div>
        </div>
        <div v-scrollanimation class="description">
          <p>{{ card.description }}</p>
        </div>
        <div class="linksContainer">
          <div class="link" v-for="(link, index) in card.urls" :key="link.url"
          v-scrollanimation
          :style="{'transition-delay': index * 400 + 'ms'}"
          >
            <a
              :href="link.url" :class="['link-icon', link.type]"
              @mouseover="getHoverStart(link.type)"
              @mouseleave="getHoverEnd(link.type)"
             />
            <span class="tooltip" :name="link.type">{{ link.type }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  methods: {
    getHoverStart (link) {
      let el = 'span[name=' + link  + ']'
      this.$el.querySelector(el).classList.add('visibleTooltip')
    },
    getHoverEnd (link) {
      let el = 'span[name=' + link  + ']'
      this.$el.querySelector(el).classList.remove('visibleTooltip')
    }
  }
}
</script>


<style  lang="scss">
.h-card-container {
  position: relative;
  @include mainCard;
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

// projects card
.p-card-container {
  transition-delay: 1s;
}

.h-card, .p-card {
  z-index: 2;
  overflow: hidden;
  position: relative;
  // @include neuShadow;
  @include smallBorder;
  // box-shadow: 0 1px 0 rgba(0,0,0,.15);
  & .main {
    display: flex;
    flex-direction: column;
    flex-wrap: none;
    padding: 2rem;
    text-align: left;
    position: relative;
    min-height: 500px;
     & .titleContainer {
      width: calc(100% - (140px + 2rem)); // the fixed width of the pix plus a little margin
      flex: 1 0 4rem;
      & .title {
        font-size: 3rem;
        font-family: $fontTernary;
        font-weight: 100;
        position: relative;
        top: 3.5rem;
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
        height: 120px;
        width: 120px;
        position: absolute;
        top: 3.5rem;
        right: 2rem;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        @include neuShadow;
        border-radius: 0;
        z-index: 2;
        border: none;
        transition: all .2s ease;
        // animation from v-scrollanimation
        &.before-enter {
          transform: translateX(-200px);
          transition: all 1s ease-in;
        }
        &.enter {
          transform: translateX(0);
          transition: all 1s ease-in;
        }
        &:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(1, 1, 1, .5);
          border-radius: 0;
        }
        &:after {
          content: '';
          z-index: 3;
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: 3em;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='192.904' height='192.904'%3E%3Crect width='100%25' height='100%25' fill='none'/%3E%3Cg class='currentLayer'%3E%3Cg fill='%23fff'%3E%3Cpath d='M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 005.303 2.197 7.498 7.498 0 005.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z'/%3E%3Cpath d='M118.035 73.689H88.69V44.345c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5V73.69H44.346a7.5 7.5 0 00-7.5 7.5 7.5 7.5 0 007.5 7.5H73.69v29.346c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5V88.689h29.345a7.5 7.5 0 007.5-7.5 7.5 7.5 0 00-7.5-7.5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        &:hover {
          top: 0;
          right: 0;
          height: 100%;
          width: 100%;
          transition: all .2s ease;
          border-radius: 0;
          &:before {
            visibility: hidden;
          }
          &:after {
            background-image: none;
          }
        }
      }
     }
     & .description {
      flex: 1 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
        & p {
          display: flex;
          align-self: center;
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
     & .linksContainer {
      flex: 1 0 4rem;
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
          @include neuShadow;
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
  -webkit-text-fill-color: rgba(0, 0, 0, .4);
  position: relative;
  top: 1rem;
  left: 2rem;
  z-index: 1;
}



.browser {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect id='backgroundrect' width='100%25' height='100%25' x='0' y='0' fill='none' stroke='none'/%3E%3Cg class='currentLayer' style=''%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath d='M 4.8457031 6 C 3.2767031 6 2 7.2985312 2 8.8945312 L 2 43 C 2 43.552 2.448 44 3 44 L 20.955078 44 C 21.709078 43.502 22.341078 42.827 22.830078 42 L 4 42 L 4 20 L 46 20 L 46 42 L 29.292969 42 C 29.079969 42.696 28.830344 43.368 28.527344 44 L 47 44 C 47.552 44 48 43.552 48 43 L 48 8.8945312 C 48 7.2985312 46.723297 6 45.154297 6 L 4.8457031 6 z M 4.8457031 8 L 45.154297 8 C 45.621297 8 46 8.4015312 46 8.8945312 L 46 18 L 4 18 L 4 8.8945312 C 4 8.4015312 4.3787031 8 4.8457031 8 z M 19 10 L 19 11 L 19 16 L 43 16 L 43 10 L 19 10 z M 8 11 A 2 2 0 0 0 6 13 A 2 2 0 0 0 8 15 A 2 2 0 0 0 10 13 A 2 2 0 0 0 8 11 z M 14 11 A 2 2 0 0 0 12 13 A 2 2 0 0 0 14 15 A 2 2 0 0 0 16 13 A 2 2 0 0 0 14 11 z M 21 12 L 41 12 L 41 14 L 21 14 L 21 12 z M 26.984375 24 A 1.0001 1.0001 0 0 0 26.292969 24.292969 L 19.292969 31.292969 A 1.0001 1.0001 0 1 0 20.707031 32.707031 L 26 27.414062 L 26 37.205078 C 26 43.562227 22.223028 47 17.466797 47 L 14 47 A 1.0001 1.0001 0 1 0 14 49 L 17.466797 49 C 23.240565 49 28 44.40193 28 37.205078 L 28 27.414062 L 33.292969 32.707031 A 1.0001 1.0001 0 1 0 34.707031 31.292969 L 27.707031 24.292969 A 1.0001 1.0001 0 0 0 26.984375 24 z' id='svg_1' class='' fill='%23ffffff' fill-opacity='1'/%3E%3C/g%3E%3C/svg%3E");
}

.github {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' style=''%3E%3Crect id='backgroundrect' width='100%25' height='100%25' x='0' y='0' fill='none' stroke='none'/%3E%3Cg class='currentLayer' style=''%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath d='M 13 0.1875 C 5.924 0.1875 0.1875 5.924 0.1875 13 C 0.1875 20.076 5.924 25.8125 13 25.8125 C 20.076 25.8125 25.8125 20.076 25.8125 13 C 25.8125 5.924 20.076 0.1875 13 0.1875 z M 13 2.1875 C 18.962 2.1875 23.8125 7.038 23.8125 13 C 23.8125 13.468017 23.776727 13.922485 23.71875 14.375 C 23.520368 14.323791 22.89514 14.165057 22.21875 14.15625 C 21.614897 14.147603 20.886022 14.24925 20.5 14.3125 C 20.603247 13.899091 20.6875 13.45771 20.6875 13 C 20.6875 11.86101 20.258316 10.750701 19.5 9.8125 C 19.781747 8.9303352 20.171546 6.9206274 19.40625 6.15625 C 17.529938 6.15625 16.478239 7.3465406 16.28125 7.59375 C 15.421188 7.281625 14.4925 7.125 13.5 7.125 C 12.532469 7.125 11.592596 7.2648502 10.75 7.5625 C 10.487877 7.2464711 9.4531088 6.15625 7.65625 6.15625 C 6.906967 6.9064336 7.2822334 8.8409068 7.5625 9.75 C 6.7697168 10.702865 6.3125 11.833418 6.3125 13 C 6.3125 13.431427 6.3458137 13.85772 6.4375 14.25 C 6.1076944 14.222144 4.7769378 14.125 4.25 14.125 C 3.7242405 14.125 2.8566645 14.239976 2.28125 14.375 C 2.2232844 13.922485 2.1875 13.468017 2.1875 13 C 2.1875 7.038 7.038 2.1875 13 2.1875 z M 4.25 14.375 C 4.767601 14.375 6.3709094 14.517671 6.53125 14.53125 C 6.5598553 14.626084 6.5906451 14.720466 6.625 14.8125 C 6.0995632 14.771478 4.9705005 14.694193 4.25 14.78125 C 3.3726828 14.885309 2.7230144 15.235508 2.46875 15.375 C 2.413807 15.130271 2.3504873 14.875634 2.3125 14.625 C 2.8624878 14.494238 3.7631846 14.375 4.25 14.375 z M 22.21875 14.40625 C 22.874177 14.414794 23.521117 14.554982 23.6875 14.59375 C 23.670669 14.706933 23.645323 14.825479 23.625 14.9375 C 23.538729 14.912784 22.757441 14.6767 21.9375 14.65625 C 21.534865 14.646365 20.898805 14.709935 20.40625 14.75 C 20.428245 14.688242 20.449307 14.625497 20.46875 14.5625 C 20.808745 14.5138 21.615612 14.397611 22.21875 14.40625 z M 21.90625 14.90625 C 22.702815 14.92612 23.548008 15.174398 23.59375 15.1875 C 22.856805 18.779176 20.337077 21.699548 17 23.03125 L 17 21.3125 C 17 20.230368 16.353923 18.824179 15.4375 18.125 C 18.02293 17.754177 19.631012 16.608797 20.3125 15 C 20.777839 14.960131 21.487574 14.895971 21.90625 14.90625 z M 5.0625 15 C 5.7777543 15.002785 6.4171329 15.039147 6.71875 15.0625 C 7.4150651 16.638237 9.0108177 17.759018 11.5625 18.125 C 11.272811 18.34609 11.003342 18.637974 10.78125 18.96875 C 10.773232 18.980691 10.757915 18.98796 10.75 19 C 10.251933 19.601258 9.3134279 19.5625 8.4375 19.5625 C 7.5445 19.5625 7.00925 18.84575 6.53125 18.21875 C 6.05125 17.59275 5.42475 17.538 5.09375 17.5 C 4.76075 17.465 4.67375 17.631 4.84375 17.75 C 5.81775 18.432 6.20075 19.271 6.59375 20 C 6.94775 20.656 7.679 21 8.5 21 L 10.03125 21 C 10.021042 21.103006 10 21.214199 10 21.3125 L 10 23.375 C 6.3180985 22.312068 3.4647679 19.359509 2.53125 15.625 C 2.7276581 15.515547 3.4121561 15.134335 4.28125 15.03125 C 4.4888823 15.006162 4.7657564 14.998845 5.0625 15 z M 13.5 21 C 13.776 21 14 21.224 14 21.5 L 14 23.75 C 13.667169 23.781001 13.34079 23.8125 13 23.8125 L 13 21.5 C 13 21.224 13.224 21 13.5 21 z M 11.5 21.59375 C 11.776 21.59375 12 21.81775 12 22.09375 L 12 23.75 C 11.667586 23.719037 11.323077 23.685494 11 23.625 L 11 22.09375 C 11 21.81775 11.224 21.59375 11.5 21.59375 z M 15.5 21.59375 C 15.776 21.59375 16 21.81775 16 22.09375 L 16 23.375 C 15.672594 23.469514 15.339269 23.561476 15 23.625 L 15 22.09375 C 15 21.81775 15.224 21.59375 15.5 21.59375 z' id='svg_1' class='selected' fill='%23ffffff' fill-opacity='1'/%3E%3C/g%3E%3C/svg%3E");
}

.codepen {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' enable-background='new 0 0 48 48' xml:space='preserve' width='48' height='48' style=''%3E%3Crect id='backgroundrect' width='100%25' height='100%25' x='0' y='0' fill='none' stroke='none'/%3E%3Cg class='currentLayer' style=''%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cg id='svg_1' class='' stroke='%23ffffff' stroke-opacity='1'%3E%3Cpolygon fill='none' stroke='%23ffffff' stroke-width='4' stroke-miterlimit='10' points='41,18 24,7 7,18 7,30 24,41 41,30 ' id='svg_2' stroke-opacity='1'/%3E%3Cpolyline fill='none' stroke='%23ffffff' stroke-width='4' stroke-miterlimit='10' points='7,18 24,30 41,18 ' id='svg_3' stroke-opacity='1'/%3E%3Cpolyline fill='none' stroke='%23ffffff' stroke-width='4' stroke-miterlimit='10' points='41,30 24,18.2 7,30 ' id='svg_4' stroke-opacity='1'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-miterlimit='10' x1='24' y1='18.100000381469727' x2='24' y2='8' id='svg_5'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-miterlimit='10' x1='24' y1='40' x2='24' y2='29.899999618530273' id='svg_6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
