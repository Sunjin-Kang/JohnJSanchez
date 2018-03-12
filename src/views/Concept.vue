<template>
  <div class='concept'>
    <div class='bg' />
    <div class='concepts'>
      <div class='concepts-grid'>
        <div
          v-for='(concept, i) in concepts'
          :key='i'
          class='design'>
          <div class='design-image'>
            <img src='../assets/images/album.jpg' />
          </div>
          <div class='design-text'>
            {{ concept }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Concept',
  data () {
    return {
      concepts: [
        'item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8'
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/abstracts/variables';
.concept {
  position: relative;
  overflow: hidden;
  padding-top: 290px;
  margin-bottom: 360px;
  color: $color-greyDark;
}
.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: $color-greyLightest;
  top: 0;
  left: 0;
  z-index: -1;
}
.concepts {
  margin: 0 auto;
  max-width: 1400px;
  width: calc(80% - 120px);
  &-grid {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 90px;
    margin-left: -45px;
    margin-right: -45px;
  }
}
@media (max-width: $screen-lg-min) {
  .concepts {
    width: calc(80% - 90px);
    padding: 0 15px;
    &-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
@media (max-width: $screen-md-min) {
  .concepts {
    width: calc(80% - 60px);
    padding: 0 15px;
    &-grid {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 30px;
    }
  }
}
@media (max-width: $screen-sm-min) {
  .concepts {
    width: 100%;
    padding: 0 15px;
    &-grid {
      grid-template-columns: 1fr;
      margin-left: 0;
      margin-right: 0;
    }
  }
}
.design {
  margin-bottom: 72px;
  &-image {
    display: block;
    width: 100%;
    > img {
      width: 100%;
      filter: grayscale(100%);
      transition: filter .3s ease;
      &:hover {
        filter: grayscale(0);
      }
    }
  }
  &-text {
    text-align: left;
  }
}
</style>
