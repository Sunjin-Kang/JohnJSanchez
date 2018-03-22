<template>
  <Loading v-if='loading' />
  <div v-else>
    <Nav />
    <transition appear appear-ative-class='project-appear-active'>
      <section class='project'>
        <h1>This is a project</h1>
      </section>
    </transition>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Nav from '@/components/Nav'
// import axios from 'axios'

export default {
  name: 'Project',
  components: { Loading, Nav },
  data () {
    return {
      loading: false
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/abstracts/variables';
.project {
  position: relative;
  overflow: hidden;
  margin-bottom: 360px;
  padding-top: 240px;
  background-color: $color-beigeLighter;
}
</style>
