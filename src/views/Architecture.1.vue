<template>
  <div class='architecture'>
    <div class='bg' />
    <div class='projects'>
      <div class='projects-grid'>
        <div
          v-for='(projectCol, i) in projects'
          :key='i'
          :class='`projects-${projectCol.colNum}`'>
          <div
            v-for='(projectItem, i) in projectCol.items'
            :key='i'
            class='project'>
            <router-link :to='projectItem.name' append>
              <div class='project-image'>
                <img :src='projectItem.photo'/>
              </div>
              <div class='project-text'>
                <span class='project-info'>
                  {{ projectItem.name + ' : ' + projectItem.date }}
                </span>
              </div>
            </router-link>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Architecture',
  data () {
    return {
      projects: [
        {
          colNum: 'col-1',
          items: [
            {
              name: 'Light Pillar',
              photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/t/579444936a49633f94994fbb/1469334689458/?format=2500w',
              date: 'fall 2018',
              professor: 'Alfie Koetter',
              course: 'Core-I',
              info: 'additional info'
            },
            {
              name: 'proj2',
              photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/592fc9d19f745641ebf104f7/592fdf0415cf7daeb2973c92/1496309580041/TowersWithin_kvu_StudioLott_%23008BW.jpg?format=1000w',
              info: 'additional info'
            },
            {
              name: 'proj3',
              photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/t/58a490d8579fb3b02577a4c4/1487180018297/?format=2500w',
              info: 'additional info'
            }
          ]
        },
        {
          colNum: 'col-2',
          items: [
            {
              name: 'proj4',
              photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/t/58a490b3579fb3b02577a2a5/1487179974928/?format=2500w',
              info: 'additional info'
            },
            {
              name: 'proj5',
              photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/t/58a491ec20099eb288b95357/1487180403090/?format=2500w',
              info: 'additional info'
            },
            {
              name: 'proj6',
              photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/57c7655cebbd1a73645ce32a/57c7655d893fc0eab4b3179b/1472685408507/Fallbrook+House+-+Interior+View+%23001.jpg?format=2500w',
              info: 'additional info'
            }
          ]
        },
        {
          colNum: 'col-3',
          items: [
            {
              name: 'proj7',
              photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/t/57902bca3e00bebc2bdb4041/1469066259000/?format=2500w',
              info: 'additional info'
            },
            {
              name: 'proj8',
              photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/t/579440c3b8a79baa23c67651/1469333713226/?format=2500w',
              info: 'additional info'
            },
            {
              name: 'proj9',
              photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/t/57b939afebbd1a60cf789ad3/1471756733883/?format=2500w',
              info: 'additional info'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/abstracts/variables';

.architecture {
  position: relative;
  overflow: hidden;
  margin-bottom: 360px;
  padding-top: 290px;
  z-index: 100;
  color: $color-greyDark;
}
.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: $color-beigeLight;
  z-index: -1;
}
.projects {
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
  &-col-1 {
    margin-top: 36px;
  }
  &-col-2 {
  }
  &-col-3 {
    margin-top: 72px;
  }
}
.project {
  margin-bottom: 60px;
  &-image {
    display: block;
    width: 100%;
    > img {
      width: 100%;
      filter: grayscale(100%);
      transition: filter .5s ease-out;
      &:hover {
        filter: grayscale(0);
      }
    }
  }
  &-text {
    position: relative;
    margin-top: 10px;
    text-align: left;
    overflow: hidden;
  }
  &-info {
    display: inline-block;
    position: relative;
    text-transform: uppercase;
    font-size: .8rem;
    letter-spacing: .12rem;
    overflow: hidden;
    transition: all .4s cubic-bezier(.645,.045,.355,1);
    &::before {
      content: "";
      background: #333;
      display: block;
      width: 100%;
      height: 2px;
      position: absolute;
      top: 50%;
      bottom: 0;
      opacity: 0;
      transform: translate3d(-100%, -1px, 0);
      transition: transform .4s cubic-bezier(1,0,0,1), opacity 0s cubic-bezier(.19,1,.22,1);
    }
    &:hover {
      &::before {
        transform: translate3d(100%, -1px, 0);
        opacity: 1;
      }
    }
  }
}

@media (max-width: $screen-lg-min) {
  .projects {
    width: calc(80% - 90px);
    padding: 0 15px;
    &-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
@media (max-width: $screen-md-min) {
  .projects {
    width: calc(80% - 60px);
    padding: 0 15px;
    &-grid {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 30px;
    }
    &-col-3 {
      margin-top: 0;
      // padding-top: 0;
      // grid-column-start: 1;
      // grid-column-end: 3;
      // display: grid;
      // grid-template-columns: 1fr 1fr;
      // position: relative;
      // grid-column-gap: 30px;
      // .project:nth-of-type(even) {
      //   transform: translateY(-72px);
      // }
    }
  }
}
@media (max-width: $screen-sm-min) {
  .projects {
    width: 100%;
    padding: 0 15px;
    &-grid {
      grid-template-columns: 1fr;
      margin-left: 0;
      margin-right: 0;
    }
  }
  .project {
    margin-bottom: 30px;
  }
}
</style>
