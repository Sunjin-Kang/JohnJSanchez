<template>
  <div id="app" class='app'>
    <Nav v-show='$route.path !== "/"'/>
    <router-view />
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
