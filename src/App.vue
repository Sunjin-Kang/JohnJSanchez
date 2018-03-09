<template>
  <div id="app" class='app'>
    <Nav v-show='$route.path !== "/"'/>
    <router-view />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  name: 'App',
  components: { Nav }
}
</script>

<style lang='scss'>
/* Global Reset & Overrides*/
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
