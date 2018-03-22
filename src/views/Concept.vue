<template>
  <Loading v-if='loading' />
  <div v-else >
    <Nav />
    <transition appear appear-active-class='concept-appear-active'>
      <div class='concept'>
        <div class='veil'/>
        <div class='concepts'>
          <div class='concepts-grid'>
            <div
              v-for='(concept, i) in concepts'
              :key='i'
              class='design'
              >
              <img :src='concept.photo' />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Nav from '@/components/Nav'
export default {
  name: 'Concept',
  components: { Loading, Nav },
  data () {
    return {
      loading: false,
      concepts: [
        {
          name: 'Sound',
          photo: 'https://i.imgur.com/dkvh5mx.jpg'
        },
        {
          name: 'Sound',
          photo: 'https://i.imgur.com/OSkdRMG.jpg'
        },
        {
          name: 'Sound',
          photo: 'https://i.imgur.com/9vYBvfQ.jpg'
        },
        {
          name: 'Taipei Performance Arts Center',
          photo: 'https://i.imgur.com/XFmwSa8.jpg'

        },
        {
          name: 'Taipei Performance Arts Center',
          photo: 'https://i.imgur.com/N5l1U9a.jpg'
        },
        {
          name: 'Taipei Performance Arts Center',
          photo: 'https://i.imgur.com/43HK6WU.jpg'
        },
        {
          name: 'Taipei Performance Arts Center',
          photo: 'https://i.imgur.com/GRCT7uF.jpg'
        },
        {
          name: 'Stuttgart',
          photo: 'https://i.imgur.com/SBccLZq.jpg'
        },
        {
          name: 'Stuttgart',
          photo: 'https://i.imgur.com/9W9h6bL.jpg'
        },
        {
          name: 'Stuttgart',
          photo: 'https://i.imgur.com/odevEsi.jpg'
        },
        {
          name: 'Stuttgart',
          photo: 'https://i.imgur.com/qNRcIUJ.jpg'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/abstracts/variables';
@keyframes veil {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes veil-out {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
@keyframes design-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes design-out {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.router-leave-active {
  .nav {
    animation-duration: 3.5s !important;
  }
  .design {
    &:nth-of-type(odd) {
      animation: design-out 3.3s ease-out;
    }
    &:nth-of-type(even) {
      animation: design-out 6.3s ease-in;
    }
  }
  .veil {
    display: block;
    animation: veil-out 5s ease;
  }
  animation: 3s;
}
.nav {
  // animation-duration: 3s !important;
}
.concept {
  position: relative;
  overflow: hidden;
  padding-top: 240px;
  margin-bottom: 360px;
  color: $color-greyDark;
  padding-bottom: 30px;
  background-color: black;
  border-bottom: 1px solid #efefef;
  &-appear-active {
    .design {
      &:nth-of-type(odd) {
        animation: design-in 2s ease;
      }
      &:nth-of-type(even) {
        animation: design-in 3s ease;
      }
    }
    .veil {
      display: block;
      animation: veil 1s ease-in-out;
    }
    animation: 3.5s;
  }
}
.veil {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  display: none;
  opacity: 0;
  top: 0;
  left: 0;
}
.concepts {
  margin: 0 auto;
  max-width: 1400px;
  width: calc(80% - 120px);
  &-grid {
    position: relative;
    margin-left: -45px;
    margin-right: -45px;
  }
}
.design {
  width: 50%;
  padding: 15px;
  > img {
    width: 100%;
    filter: grayscale(100%) contrast(105%) invert(100%);
    transition: filter .3s ease;
    &:hover {
      filter: grayscale(0);
    }
  }
  &:first-child {
    margin-top: 72px;
  }
  &:nth-of-type(odd) {
    float: right;
    clear: right;
  }
  &:nth-of-type(even) {
    float: left;
    clear: left;
  }
}
@media (max-width: $screen-lg-min) {
  .concepts {
    width: calc(80% - 90px);
    padding: 0 15px;
  }
}
@media (max-width: $screen-md-min) {
  .concepts {
    width: calc(80% - 60px);
    padding: 0 15px;

  }
}
@media (max-width: $screen-sm-min) {
  .concept {
    padding-top: 76px;
  }
  .concepts {
    width: 100%;
    padding: 0 15px;
    &-grid {
      margin-left: 0;
      margin-right: 0;
    }
    .design {
      width: 100%;
      padding-left: 0;
      padding-right: 0;
      float: none;
      &:first-child {
        margin-top: 0;
      }
    }
  }
}

</style>
