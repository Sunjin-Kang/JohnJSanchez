<template>
  <footer class='footer'>
    <h1>
      this is the footer
    </h1>
    <p>
      contact info/additional info/copyrights/credits
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      name: 'John J Sanchez',
      links: ['Architecture', 'Concept', 'About', 'Contact']
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
}
</style>
