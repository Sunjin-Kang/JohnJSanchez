<template>
  <footer class='footer'>
    <div class='footer-wrapper'>

      <div class='right'>
        <p>
        Copyright © John J Sanchez 2018
        </p>
        <p class='credits'>
          Design by Sun Jin<a href='http://sunjin.io' target='_blank' class='link'><img :src='sLogo' class='s-logo'/></a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      sLogo: require('@/assets/images/sunLogo.png'),
      name: 'John J Sanchez'
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/abstracts/variables';
.footer {
  position: fixed;
  width: 100%;
  height: 360px;
  bottom: 0;
  left: 0;
  padding: 36px;
  z-index: -100;
  background-color: $color-greyDark;
  color: black;
  background-color: white;
  &-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
.right {
  position: absolute;
  width: 50%;
  left: 50%;
  bottom: 0;
}
.credits {
  position: relative;
}
.s-logo {
  display: inline-block;
  position: absolute;
  bottom: 0;
  width: 24px;
}
</style>
