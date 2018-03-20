<template>
  <transition appear appear-active-class='nav-appear-active'>
    <div class='sidebar'>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      links: ['']
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/abstracts/variables';
.router-leave-active {

}
@media (max-width: $screen-lg-min) {
}
@media (max-width: $screen-md-min) {
}
@media (max-width: $screen-sm-min) {
}
</style>
