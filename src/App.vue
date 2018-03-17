<template>
  <div id="app" class='app'>
    <!-- <Nav v-show='$route.path !== "/"'/> -->
    <transition name='router' mode='out-in'>
      <router-view />
    </transition>
    <Footer v-show='$route.path !=="/"' />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'

export default {
  name: 'App',
  components: { Nav, Footer, Loading },
  data () {
    return {
      loading: false
    }
  },
  mounted () {
    window.addEventListener('load', () => {
      this.loading = false
    })
  }
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
  50% {
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
  50% {
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
  33% {
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
  33% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.router-enter-active {
  // .panel {
  //   opacity: 1 !important;
  //   display: block !important;
  // }
  // .panel-l {
  //   animation: 1s panel-l-in cubic-bezier(.66,0,.33,1);
  // }
  // .panel-r {
  //   animation: 1s panel-r-in cubic-bezier(.66,0,.33,1);
  // }
  // animation: 5s ease;
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
    animation: 2s panel-l-out ease-in-out;
  }
  .panel-r {
    animation: 2s panel-r-out ease-in-out;
  }
  .project {
    img {
      animation: project-out 2s ease;
    }
    &-info {
      animation: project-text-out 2s ease;
    }
  }
  animation: 1.5s;
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
