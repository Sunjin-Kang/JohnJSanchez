<template>
  <Loading v-if='loading'/>
  <div v-else>
    <Nav />
    <transition appear appear-active-class='about-appear-active'>
      <section class='about'>
        <div class='tiles'>
          <div v-for='i in 8' :key='i' :class='`tile tile-${i}`'/>
        </div>
        <div class='stripes'>
          <div v-for='i in 8' :key='i' :class='`stripe stripe-${i}`'/>
        </div>
        <div class='grid'>
          <span
            v-for='(letter, i) in gridName'
            :key='i'
            :class='`letter letter-${gridOrder[i]}`'>
            {{ letter }}
          </span>
        </div>
        <h1 class='name'>{{ name }}</h1>
        <h5 class='school'>{{ school }}</h5>
        <p class='biography'>
          John was born and raised in Long Island. After receiving his Bachelors of Science in Architecture from the University at Buffalo, he returned to Long Island to pursue graduate study.
          <br/>
          <br/>
          John is currently enrolled in Columbia University’s Graduate School of Architecture, Planning and Preservation pursuing a degree in Master of Architecture.
        </p>
      </section>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '@/components/Loading'
import Nav from '@/components/Nav'
export default {
  name: 'Concept',
  components: { Loading, Nav },
  mounted () {
    window.addEventListener('load', () => {
      this.loading = false
    })
  },
  data () {
    return {
      name: 'John Sanchez',
      gridName: 'JOHNJSANCHEZ',
      gridOrder: [3, 7, 2, 6, 12, 10, 8, 1, 9, 4, 5, 11],
      school: 'Columbia GSAPP',
      profilePic: require('@/assets/images/profilePic.jpg'),
      loading: false
    }
  },
  beforeCreate () {
    this.loading = true
    axios.get('https://i.imgur.com/Mdzlh9y.jpg')
      .then(() => {
        this.loading = false
      })
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/abstracts/variables';
@keyframes tiles {
  0%, 100% {
    z-index: 0;
    opacity: 1;
  }
}
@keyframes tile-up {
  0% {
    transform: translate(0, 100vh);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes tile-down {
  0% {
    transform: translate(0, -100vh);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes stripes {
  0%, 100% {
    z-index: 1;
    opacity: 1;
  }
}
@keyframes stripe-left {
  0% {
    background-color: $color-greyLightest;
  }
  100% {
    transform: translate(100vw, 0);
    background-color: $color-greyLightest;
  }
}
@keyframes stripe-right {
  0% {
    background-color: $color-greyLightest;
  }
  100% {
    transform: translate(-100vw, 0);
    background-color: $color-greyLightest;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes letter-in {
  0% {
    background-color: $color-greyLightest;
    color: $color-greyLightest;
  }
  60% {
    background-color: $color-greyLightest;
    color: $color-greyLightest;
  }
  80% {
    color: white;
  }
  100% {
  }
}
@keyframes letter-out-1 {
  0% {
  }
  5% {
    color: white;
  }
  15% {
    background-color: $color-greyLightest;
    color: $color-greyLightest;
  }
  100% {
    color: $color-greyLightest;
    background-color: $color-greyLightest;
  }
}
@keyframes letter-out-2 {
  0% {
  }
  12% {
    color: white;
  }
  21% {
    background-color: $color-greyLightest;
    color: $color-greyLightest;
  }
  100% {
    color: $color-greyLightest;
    background-color: $color-greyLightest;
  }
}
@keyframes letter-out-3 {
  0% {
  }
  21% {
    color: white;
  }
  33% {
    background-color: $color-greyLightest;
    color: $color-greyLightest;
  }
  100% {
    color: $color-greyLightest;
    background-color: $color-greyLightest;
  }
}
.router-leave-active {
  .nav {
    animation-duration: 4s !important;
  }
  .name, .school, .biography {
    animation: fade-out 2s ease;
  }
  .letter {
    &-1, &-2, &-3, &-4 {
      animation: letter-out-1 2s ease-in;
    }
    &-5, &-6, &-7, &-8 {
      animation: letter-out-2 2s ease-in;
    }
    &-9, &-10, &-11, &-12 {
      animation: letter-out-2 2s ease-in;
    }
  }
  .stripes {
    display: block !important;
    opacity: 1 !important;
    animation: stripes 2s ease;
    animation-delay: 1.3s;
  }
  .stripe {
    background-color: white !important;
    &:nth-of-type(odd) {
      animation: stripe-right 1.5s ease-in-out;
      animation-delay: 1.3s;
    }
    &:nth-of-type(even) {
      animation: stripe-left 1.5s ease-in-out;
      animation-delay: 1.3s;
    }
  }
  @for $i from 1 through 8 {
    .stripe-#{$i} {
      animation-duration: random(70) / 100 + .6 + s !important;
    }
  }
  animation-duration: 3s;
}
.about {
  padding-top: 200px;
  padding-bottom: 100px;
  text-align: center;
  margin-bottom: 360px;
  color: $color-greyDark;
  width: 100%;
  background-color: $color-greyLightest;
  border-bottom: 1px solid #efefef;
  &-appear-active {
    .tiles {
      display: block;
      animation: tiles 1.5s ease;
    }
    .tile {
      &:nth-of-type(odd) {
        animation: tile-up 1.5s ease-in-out;
      }
      &:nth-of-type(even) {
        animation: tile-down 1.5s ease-in-out;
      }
    }
    @for $i from 1 through 8 {
      .tile-#{$i} {
        animation-duration: random(70) / 100 + .6 + s !important;
      }
    }
    .letter {
      animation: letter-in ease;
    }
    @for $i from 1 through 12 {
      .letter-#{$i} {
        animation-duration: $i * .25 + 2 + s !important;
      }
    }
    .name {
      animation: fade-in 4s ease;
    }
    .school {
      animation: fade-in 4.5s ease;
    }
    .biography {
      animation: fade-in 5s ease;
    }
    animation-duration: 5s;
  }
}
.tiles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: none;
  opacity: 0;
  z-index: -1;
  .tile {
    display: inline-block;
    width: 12.5%;
    height: 100vh;
    background-color: $color-greyLightest;
  }
}
.stripes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: none;
  opacity: 0;
  z-index: -1;
  .stripe {
    display: block;
    width: 100%;
    height: 12.5vh;
    background-color: $color-greyLightest;
  }
}
.grid {
  width: 50vw;
  height: calc(50vw * 3 / 4);
  margin: 0 auto;
  background-image: url('https://i.imgur.com/Mdzlh9y.jpg');
  background-size: cover;
  background-position: 50% 50%;
}
.letter {
  display: inline-flex;
  color: transparent;
  width: 25%;
  height: 33.34%;
  font-size: 10vw;
  border: 3px solid $color-greyLightest;
  align-items: center;
  justify-content: center;
  transition: color 2s ease;
  &:hover {
    transition: color .1s ease-out;
    color: white;
  }
}
.name {
  margin-top: 30px;
}
.school {
  margin-bottom: 30px;
}
.biography {
  width: 50%;
  padding: 30px;
  margin: 0 auto;
  font-family: garamond;
  text-align: left;
  font-size: 1.2rem;
  line-height: 2;
}
@media (max-width: $screen-lg-min) {
}
@media (max-width: $screen-md-min) {

}
@media (max-width: $screen-sm-min) {
  .about {
    padding: 15px;
    padding-top: 76px;
    width: 100%;
  }
  .grid {
    width: 100%;
    height: 75vw;
  }
  .letter {
    font-size: 15vw;
  }
  .biography {
    width: 100%;
  }

}
</style>
