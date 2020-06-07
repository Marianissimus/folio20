<template>
  <button v-if="direction === 'right'" class='btn-w-icon'>
    <span v-if="beforeIcon" :class="['icon-styles', beforeIcon, 'first-icon']">
    </span>
    <span v-if="text" class="label">
      {{ text }}
    </span>
    <span v-if="afterIcon"  :class="['icon-styles', afterIcon, 'second-icon']">
    </span>
  </button>
  <button v-else>
    test
  </button>
</template>

<script>
export default {
  props: {
    beforeIcon: {
      type: String
    },
    text: {
      type: String
    },
    afterIcon: {
      type: String
    },
    direction: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.btn-w-icon {
  width: 350px;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;
  @include smallBorder;
  text-decoration: none;
  color: white;
  font-family: $fontSecondary;
  padding: 20px;
  overflow: hidden;
  background-color: transparent;
  transition: background-color 5s ease-in-out;
}

.icon-styles {
  background-color: transparent;
  height: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform .5s cubic-bezier(0.86, 0, 0.07, 1), opacity .4s cubic-bezier(0.86, 0, 0.07, 1); // animate on hover
}

.btn-w-icon {
  transition: background-color .5s ease-in-out;
  padding: 40px;
  & .label {
    font-size: 30px;
    flex: 0 0 auto;
    transform: translateX(20px);
  }
  & .first-icon {
    flex: 0 0 40px;
  }
  & .second-icon {
    flex: 0 0 40px;
    opacity: 0;
    transform: translateX(60px);
  }
  &:hover {
    background-color: black;
    & .label {
      transform: translateX(-60px);
    }
    & .first-icon {
      opacity: 0;
      transform: translateX(-80px);
    }
    & .second-icon {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

.arrow-right {
  background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 42.67'%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:white;}%3C/style%3E%3C/defs%3E%3Ctitle%3EAsset 47%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M63.22,19.57,44.5.78a2.67,2.67,0,0,0-3.78,3.77L54.79,18.67H2.67a2.67,2.67,0,1,0,0,5.33H55L40.73,38.11a2.67,2.67,0,1,0,3.76,3.78L63.21,23.35a2.67,2.67,0,0,0,0-3.78Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}


.arrow-left {
  background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' standalone='no'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3E%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='1280.000000pt' height='853.000000pt' viewBox='0 0 1280.000000 853.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cmetadata%3E Created by potrace 1.16, written by Peter Selinger 2001-2019 %3C/metadata%3E%3Cg transform='translate(0.000000,853.000000) scale(0.100000,-0.100000)' fill='white' stroke='none'%3E%3Cpath d='M4071 8505 c-29 -14 -72 -39 -95 -57 -22 -17 -237 -226 -476 -463 -239 -237 -660 -654 -935 -926 -275 -272 -725 -717 -1000 -989 -1264 -1252 -1480 -1471 -1510 -1533 -40 -86 -55 -152 -55 -247 0 -122 26 -208 93 -310 17 -25 638 -655 1382 -1400 743 -745 1599 -1603 1901 -1906 348 -350 569 -565 605 -587 281 -178 658 -58 787 248 64 154 48 349 -41 490 -18 29 -620 642 -1449 1475 l-1417 1425 5282 5 5282 5 60 24 c125 50 220 132 283 242 l32 56 0 210 0 209 -36 60 c-65 109 -156 185 -279 235 l-60 24 -5304 5 -5303 5 1208 1194 c1723 1702 1714 1693 1753 1771 17 36 39 101 48 145 48 237 -78 487 -298 590 -51 23 -63 25 -229 25 -166 0 -178 -2 -229 -25z'/%3E%3C/g%3E%3C/svg%3E");
}


.label {
  transition: transform .5s cubic-bezier(0.86, 0, 0.07, 1);
}
</style>