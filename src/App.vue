<template>
  <div id="app" class='app'>
    <transition name='router' mode='out-in'>
      <router-view />
    </transition>
    <Footer v-if='$route.path !== "/" && $route.path !== "/Contact"' />
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
@import './scss/abstracts/variables';
.router-enter-active {
}
.router-leave-active {
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
button, input, textarea {
    outline: 0;
}
.app {
  font-family: 'Avenir', sans-serif, Georgia;
}
</style>
