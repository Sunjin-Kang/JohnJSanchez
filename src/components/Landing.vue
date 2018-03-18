<template>
  <Loading v-if='loading'/>
  <div v-else>
    <transition appear appear-class='landing-appear' appear-active-class='landing-appear-active' appear-to-class='landing-appear-to'>
      <div class='landing'>
        <div class='landing-bg'>
          <img :src='bg' />
        </div>

        <div class='panel'>
          <div class='panel-l'>
            <div class='panel-l__top'/>
            <div class='panel-l__bot'/>
          </div>
          <div class='panel-r'>
            <div class='panel-r__top'/>
            <div class='panel-r__bot'/>
          </div>
        </div>

        <div class='landing-content'>
          <div class='heading'>
            <h2 class='title'>{{ title }}</h2>
            <h5 class='subtitle'>{{ subtitle }}</h5>
          </div>

          <div class='main'>
            <h1 class='name'>{{ name }}</h1>
            <router-link class='btn' to='Architecture'>
              <div class='btn-txt'>
                <span class='btn-txt__default'>
                  <span
                    v-for='(letter, i) in buttonText'
                    :key='i'
                    :class='{ "space": letter == " " }'
                    :style="translateY(-100)">
                    {{ letter }}
                  </span>
                </span>
                <span class='btn-txt__hover'>
                  <span
                    v-for='(letter, i) in buttonText'
                    :key='i'
                    :class='{ "space": letter == " " }'
                    :style="translateY(30)">
                    {{ letter }}</span>
                </span>
              </div>
            </router-link>
            <p>{{ buttonSubtext }}</p>
          </div>

        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Loading from './Loading'
import axios from 'axios'

export default {
  name: 'Landing',
  components: { Loading },
  data () {
    return {
      loading: false,
      title: 'Architecture Design',
      subtitle: 'Columbia GSAPP',
      name: 'John J Sanchez',
      buttonText: 'Selected Works',
      buttonSubtext: '2011 - 2018',
      bg: 'https://i.imgur.com/cDg2Mex.jpg'
    }
  },
  created () {
    this.loading = true
    axios.get('https://i.imgur.com/cDg2Mex.jpg')
      .then(res => {
        this.loading = false
      })
  },
  methods: {
    translateY: function (val) {
      let y = Math.random() * val + (val / 5)
      return {'transform': `matrix(1, 0, 0, 1, 0, ${y})`}
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/abstracts/variables';
/* animations */
@keyframes hide {
  0% {
    visibility: hidden;
  }
  100% {
    visibility: hidden;
  }
}
@keyframes slide-up {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -100vh);
  }
  51% {
    transform: translate(0, -150vh);
  }
  60% {
    transform: translate(0, -150vh);
  }
  75% {
    transform: translate(0, -150vh);
  }
  100% {
    transform: translate(0, -150vh);
  }
}
@keyframes slide-down {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 100vh);
  }
  51% {
    transform: translate(0, 150vh);
  }
  60% {
    transform: translate(0, 150vh);
  }
  75% {
    transform: translate(0, 150vh);
  }
  100% {
    transform: translate(0, 150vh);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}
@keyframes ani-up {
  35% {
    transform: translate(0);
  }
  100% {
    transform: translate(-150vw, -150vh);
  }
}
@keyframes ani-down {
  35% {
    transform: translate(0);
  }
  100% {
    transform: translate(150vw, 150vh);
  }
}
@keyframes ani-left {
  35% {
    transform: translate(0);
  }
  100% {
    transform: translate(-150vw, 150vh);
  }
}
@keyframes ani-right {
  35% {
    transform: translate(0);
  }
  100% {
    transform: translate(150vw, -150vh);
  }
}
@keyframes starry-night {
  0% {
    filter: brightness(100%);
  }
  10% {
    filter: brightness(80%);
  }
  20% {
    filter: brightness(75%);
  }
  30%{
    filter: brightness(60%);
  }
  40% {
    filter: brightness(50%);
  }
  50% {
    filter: brightness(65%);
  }
  60% {
    filter: brightness(85%);
  }
  70% {
    filter: brightness(115%);
  }
  80% {
    filter: brightness(150%);
  }
  90% {
    filter: brightness(140%);
  }
  100% {
    filter: brightness(120%);
  }
}
.landing {
  position: relative;
  color: white;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  &-bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    animation: starry-night 10s ease-in-out infinite alternate;
    > img {
      position: absolute;
      min-width: 100%;
      min-height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding: 36px;
    // border: 16px solid $color-beigeLighter;
  }
  &-appear-active {
    .landing-bg {
      animation: hide 2s ease;
    }
    .panel-l {
      animation: slide-up 4s ease;
      &__top {
        animation: ani-left 6s ease;
      }
      &__bot {
        animation: ani-down 6s ease;
      }
    }
    .panel-r {
      animation: slide-down 4s ease;
      &__top {
        animation: ani-up 6s ease;
      }
      &__bot {
        animation: ani-right 6s ease;
      }
    }
    animation: 6s ease;
  }
  &-appear {
  }
  &-appear-to {
  }
}
.panel {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &-l, &-r {
    position: absolute;
    width: 200vw;
    height: 200vh;
    z-index: -1;
    &__top, &__bot {
      position: absolute;
      height: 50%;
      width: 100%;
    }
    &__top {
      background-color: inherit;
      top: 0;
    }
    &__bot {
      background-color: inherit;
      bottom: 0;
    }
  }
  &-l {
    right: 50%;
    top: 100vh;
    background-color: transparent;
    > div {
      background-color: $color-beigeLight;
    }
  }
  &-r {
    left: 50%;
    bottom: 100vh;
    background-color: transparent;
    > div {
      background-color: $color-beigeLighter;
    }
  }
}
/* Intro Info */
.heading {
  position: absolute;
  top: 36px;
  letter-spacing: .15em;
  text-align: center;
  .title {
    font-weight: 100;
    letter-spacing: .15em;
  }
  .subtitle {
    font-weight: 100;
  }
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: .8em;
  }
}
.name {
  color: white;
  font-weight: 100;
  letter-spacing: .2em;
}

.btn {
  display: inline-block;
  position: relative;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: .25em;
  padding: .75em 1em;
  border: 2px solid white;
  margin: 1em;
  overflow: hidden;
  z-index: 1;
  transition: transform .4s cubic-bezier(.7, 0, .3, 1);
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: white;
    transform: translateY(100%);
    transition: transform .4s cubic-bezier(.7, 0, .3, 1);
  }
  &:hover {
    &::before {
      transform: translateY(0);
    }
    .btn-txt {
      &__hover {
        transform: translateY(0);
        > * {
          transform: translateY(0) !important;
        }
      }
    }
  }
  &:not(:hover) {
    .btn-txt {
      &__default > * {
        transform: translateY(0) !important;
      }
    }
  }
  &-txt {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    > span {
      display: inline-block;
      transition: transform .4s cubic-bezier(.7, 0, .3, 1);
      > * {
        position: relative;
        display: inline-block;
        transition: transform .6s cubic-bezier(.7, 0, .3, 1);
      }
    }
    &__default {
      position: relative;
    }
    &__hover {
      position: absolute;
      color: black;
      top: 0;
      left: 0;
      transform: translateY(calc(2.5em + 4px));
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    border-style: inset;
  }
}
.space {
  width: .5em;
  height: 100%;
}
</style>
