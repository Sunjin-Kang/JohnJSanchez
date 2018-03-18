<template>
  <div id="app" class='app'>
    <transition name='router' mode='out-in'>
      <router-view />
    </transition>
    <Footer v-show='$route.path !=="/"' />
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: { Footer }
}
</script>

<style lang='scss'>
/* Nav keyframes */
@keyframes nav-out {
  0% {
    transform: translate(0, 0);
  }
  5% {
    transform: translate(0, 0);
  }
  30% {
    transform: translate(0, -50%);
    opacity: 0;
  }
  100% {
    transform: translate(0, -50%);
    opacity: 0;
  }
}
/* Arch keyframes */
@keyframes panel-l-out {
  0% {
    transform: translate(0, 0);
  }
  15% {
    transform: translate(0, 0);
  }
  60% {
    transform: translate(0, -100vh);
  }
  100% {
    transform: translate(0, -100vh);
  }
}
@keyframes panel-r-out {
  0% {
    transform: translate(0, 0);
  }
  15% {
    transform: translate(0, 0);
  }
  60% {
    transform: translate(0, 100vh);
  }
  100% {
    transform: translate(0, 100vh);
  }
}
@keyframes project-out {
  0% {
    transform: translate(0, 0);
  }
  40% {
    transform: translate(0, 110%);
  }
  100% {
    transform: translate(0, 110%);
  }
}
@keyframes project-text-out {
  0% {
    opacity: 1;
  }
  10% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.router-enter-active {
}
.router-leave-active {
  .nav {
    animation: nav-out 2s ease-out;
  }
  .panel {
    opacity: 1 !important;
    display: block !important;
  }
  .panel-l {
    animation: 2.5s panel-l-out ease-in-out;
  }
  .panel-r {
    animation: 2.5s panel-r-out ease-in-out;
  }
  .project {
    img {
      animation: project-out 2.5s ease;
    }
    &-info {
      animation: project-text-out 2.5s ease;
    }
  }
  animation: 2s;
}
/* Global Reset & Overrides */
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  // background-color: #ece9e7;
}
ol, ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
.app {
  font-family: 'Avenir', sans-serif, Georgia;
}
</style>
