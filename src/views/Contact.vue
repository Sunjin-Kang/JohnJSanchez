<template>
  <Loading v-if='loading' />

  <div v-else>
    <Nav />
    <transition appear appear-active-class='contact-appear-active'>
      <div class='contact'>
        <div class='contact-left'>
          <div class='contact-left__default'>
            <div class='contact-left__default-window'/>
            <!-- <img :src='photo' /> -->
          </div>
          <div class='contact-left__form'></div>
        </div>
        <div class='contact-right'>

        </div>
      </div>
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
  data () {
    return {
      loading: false,
      photo: 'https://i.imgur.com/FOapUa7.jpg'
    }
  },
  mounted () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 500)
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/abstracts/variables';
@keyframes window-slide {
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes contact-in {
  0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
.router-leave-active {

}
.contact {
  display: block;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  &-left, &-right {
    position: fixed;
    width: 50%;
    height: 100vh;
    top: 0;
    bottom: 0;
  }
  &-left {
    left: 0;
    background-color: $color-beigeLighter;
  }
  &-right {
    right: 0;
    background-color: white;
  }
  &-appear-active {
    .contact-left {
      animation: contact-in 1s ease;
    }
    .contact-left__default-window {
      animation: window-slide 1s ease;
    }
    animation: 3s;
  }
}
.contact-left {
  display: flex;
  justify-content: center;
  align-items: center;
  &__default {
    position: relative;
    display: flex;
    overflow: hidden;
    max-height: 55vh;
    max-width: 35vw;
    background-image: url('https://i.imgur.com/FOapUa7.jpg');
    background-position: 50% 50%;
    width: 35vw;
    height: 55vh;
    &-window {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      z-index: 1;
      background-color: $color-beigeLighter;
      left: 100%;
    }
    > img {
      width: 100%;
      min-height: 100%;
      min-width: 100%;
      // max-width: 35vw;
      // max-height: 55vh;
    }
  }
  &__form {

  }
}
</style>
