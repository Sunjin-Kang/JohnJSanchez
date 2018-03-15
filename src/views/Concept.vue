<template>
  <div class='concept'>
    <div class='bg' />
    <div class='concepts'>
      <div class='concepts-grid'>
        <div
          v-for='(concept, i) in concepts'
          :key='i'
          class='design'
          >
          <img :src='concept.photo' />
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
        {
          name: 'Light Pillar',
          photo: require('@/assets/architecture/lightPillar.jpg')

        },
        {
          name: 'proj2',
          photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/592fc9d19f745641ebf104f7/592fdf0415cf7daeb2973c92/1496309580041/TowersWithin_kvu_StudioLott_%23008BW.jpg?format=1000w'
        },
        {
          name: 'proj3d onagoindfnbofdbndfbiooi',
          photo: require('@/assets/architecture/album.jpg')
        },
        {
          name: 'proj4',
          photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/t/58a490b3579fb3b02577a2a5/1487179974928/?format=2500w'
        },
        {
          name: 'proj5',
          photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/t/58a491ec20099eb288b95357/1487180403090/?format=2500w'
        },
        {
          name: 'proj6',
          photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/57c7655cebbd1a73645ce32a/57c7655d893fc0eab4b3179b/1472685408507/Fallbrook+House+-+Interior+View+%23001.jpg?format=2500w'
        },
        {
          name: 'proj7',
          photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/t/57902bca3e00bebc2bdb4041/1469066259000/?format=2500w'
        },
        {
          name: 'proj8',
          photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/t/579440c3b8a79baa23c67651/1469333713226/?format=2500w'
        },
        {
          name: 'proj9',
          photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/t/57b939afebbd1a60cf789ad3/1471756733883/?format=2500w'
        }
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
  padding-top: 300px;
  margin-bottom: 360px;
  color: $color-greyDark;
  padding-bottom: 30px;
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
    margin-left: -45px;
    margin-right: -45px;
  }
}
.design {
  width: 50%;
  // margin-bottom: 15px;
  padding: 15px;
    > img {
    width: 100%;
    filter: grayscale(100%);
    transition: filter .3s ease;
    &:hover {
      filter: grayscale(0);
    }
  }
  &:nth-of-type(odd) {
    float: left;
    clear: left;
  }
  &:nth-of-type(even) {
    float: right;
    clear: right;
  }
}
@media (max-width: $screen-lg-min) {
  .concepts {
    width: calc(80% - 90px);
    padding: 0 15px;
  }
}
@media (max-width: $screen-md-min) {
  .concepts {
    width: calc(80% - 60px);
    padding: 0 15px;

  }
}
@media (max-width: $screen-sm-min) {
  .concepts {
    width: 100%;
    padding: 0 15px;
  }
}

</style>
