<template>
  <section class='architecture'>
    <transition appear appear-active-class='bg-appear-active'>
      <div class='bg'>
        <div class='panel-l'/>
        <div class='panel-r'/>
      </div>
    </transition>
    <div class='projects'>
      <div class='projects-grid'>
        <div
          v-for='(projectCol, i) in projects'
          :key='i'
          :class='`projects-col-${i + 1}`'>
          <div
            v-for='(project, i) in projectCol.items'
            :key='i'
            class='project'>
            <transition appear appear-active-class='project-appear-active' appear-class='project-appear' appear-to-class='project-appear-to'>
              <router-link :to='project.name' append class='project-link'>

                  <div class='project-image'>
                    <img :src='project.photo'/>
                  </div>
                  <div class='project-text'>
                    <div class='project-info'>
                      {{ project.name + ' : ' + project.date}}
                    </div>
                  </div>
              </router-link>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Architecture',
  data () {
    return {
      projects: [
        {
          col: 'col-1',
          items: [
            {
              name: 'Library for the Illiterate',
              photo: require('@/assets/architecture/libraryIlliterate.jpg'),
              date: 'Spring 2017',
              professor: 'Christoph Kumpusch',
              course: 'Core-II',
              info: 'additional info'
            },
            {
              name: 'Light Pillar',
              photo: require('@/assets/architecture/lightPillar.jpg'),
              date: 'Fall 2016',
              professor: 'Alfie Koetter',
              course: 'Core-I',
              info: 'additional info'
            },
            {
              name: 'Eclipsed',
              photo: require('@/assets/architecture/eclipsed.jpg'),
              date: 'Fall 2016',
              professor: 'Alfie Koetter',
              course: 'Core-I',
              info: 'additional info'
            },
            {
              name: 'proj4',
              photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/592fc9d19f745641ebf104f7/592fdf0415cf7daeb2973c92/1496309580041/TowersWithin_kvu_StudioLott_%23008BW.jpg?format=1000w',
              date: 'fall 2018',
              professor: 'Alfie Koetter',
              course: 'Core-I',
              info: 'additional info'
            }
          ]
        },
        {
          col: 'col-2',
          items: [
            {
              name: 'Light Forms',
              photo: require('@/assets/architecture/lightForms.jpg'),
              date: 'Fall 2016',
              professor: 'Alfie Koetter',
              course: 'Core-I',
              info: 'additional info'
            },
            {
              name: 'proj6',
              photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/t/58a490b3579fb3b02577a2a5/1487179974928/?format=2500w',
              date: 'fall 2018',
              professor: 'Alfie Koetter',
              course: 'Core-I',
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
  padding-top: 300px;
  z-index: 100;
  color: $color-greyDark;
  background-color: $color-beigeLighter;
}
@keyframes panel-l {
  0% {
    transform: translate(0, 100vh);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes panel-r {
  0% {
    transform: translate(0, -100vh);
  }
  100% {
    transform: translate(0, 0);
  }
}
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: white;
  opacity: 0;
  display: none;
  z-index: -1;
  .panel-l, .panel-r {
    position: absolute;
    width: 50%;
    height: 100vh;
    top: 0;
    background-color: $color-beigeLighter;
  }
  .panel-l {
    left: 0;
  }
  .panel-r {
    right: 0;
  }
  &-appear-active {
    opacity: 1;
    display: block;
    .panel-l {
      animation: 2s panel-l ease;
    }
    .panel-r {
      animation: 2s panel-r ease;
    }
    animation: 2s ease;
  }
}
.projects {
  margin: 0 auto;
  max-width: 1400px;
  min-height: 100vh;
  width: calc(80% - 120px);
  &-grid {
    position: relative;
    margin-left: -45px;
    margin-right: -45px;
  }
  &-col-1 {
    float: left;
    width: calc(100% * 2 / 3);
    .project {
      width: 50%;
      &:nth-of-type(1) {
        margin-top: 36px;
      }
    }
  }
  &-col-2 {
    float: right;
    width: calc(100% / 3);
    .project {
      width: 100%;
      &:nth-of-type(1) {
        margin-top: 72px;
      }
    }
  }
}
@keyframes slide-up {
  0% {
    transform: translate(0, 110%);
    opacity: 0;
  }
  60% {
    transform: translate(0, 110%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.project {
  margin-bottom: 60px;
  padding-left: 45px;
  padding-right: 45px;
  &-image {
    display: block;
    width: 100%;
    overflow: hidden;
    > img {
      position: relative;
      width: 100%;
      height: auto;
      filter: grayscale(100%);
      transition: filter .5s ease-out;
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
  &-text {
    position: relative;
    text-align: left;
    margin-top: 10px;
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
      transition: transform .6s cubic-bezier(1,0,0,1), opacity 0s cubic-bezier(.19,1,.22,1);
    }
  }
  &:hover {
    .project-info::before {
      transform: translate3d(100%, -1px, 0);
      opacity: 1;
    }
    img {
      filter: grayscale(0);
    }
  }
  &-appear {
  }
  &-appear-active {
    img {
      animation: slide-up 4s ease;
    }
    animation: 2s ease;
    .project-text {
      animation: fade-in 4s ease;
    }
    transition: all 4s ease;
  }
  &-appear-to {
  }
}
@media (max-width: $screen-lg-min) {
  .projects {
    width: calc(80% - 90px);
  }
}
@media (max-width: $screen-md-min) {
  .projects {
    width: calc(80% - 60px);
    &-col-1, &-col-2 {
      width: 100%;
      .project {
        width: 50%;
        padding-left: 15px;
        padding-right: 15px;
      }
    }
    &-col-2 {
      .project:nth-of-type(2) {
        // margin-top: 36px;
      }
    }
  }
}
@media (max-width: $screen-sm-min) {
  .architecture {
    padding-top: 15px;
  }
  .projects {
    width: 100%;
    padding: 0 15px;
    &-grid {
      margin-left: 0;
      margin-right: 0;
    }
    &-col-1, &-col-2 {
      width: 100%;
      .project {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
        margin-bottom: 30px;
        float: none;
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
