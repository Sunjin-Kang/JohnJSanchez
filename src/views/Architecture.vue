<template>
  <Loading v-if='loading'/>
  <div v-else id='architecture'>
    <Nav />
    <transition appear appear-active-class='architecture-appear-active'>
      <section class='architecture'>
        <div class='panel'>
          <div class='panel-l'/>
          <div class='panel-r'/>
        </div>

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
                <router-link :to='{name: "Project", params: {project : project.link}}' class='project-link' exact>
                  <div class='project-image'>
                    <img :src='project.photo'/>
                  </div>
                  <div class='project-text'>
                    <div class='project-info'>
                      {{ project.name + ' : ' + project.date}}
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Nav from '@/components/Nav'
import axios from 'axios'

export default {
  name: 'Architecture',
  components: { Loading, Nav },
  data () {
    return {
      loading: false,
      projects: [
        {
          col: 'col-1',
          items: [
            {
              name: 'Library for the Illiterate',
              link: 'Library-for-the-Illiterate',
              photo: 'https://i.imgur.com/cq1pLYK.jpg',
              date: 'Spring 2017',
              professor: 'Christoph Kumpusch',
              course: 'Core-II',
              description: 'What does it mean to be technologically illiterate? Does the untrained mind gaze at a computer screen with the same mystified look that a two year old gives to a page of written text? A disconnect clearly exists between older generations and the technology that is becoming part of our everyday lives. This is one of the issues I would like to address in my library design.\nI not only want to address the issue of technological illiteracy among the elderly but also attempt to create mediation between technology and humans in a way that focuses on the generational trilogy: the grandparent, parent, and child. By making spaces specific to each level of technological illiteracy a certain hierarchy can be formed which will work to affirm and promote ways of thinking and ways for finding information in the library.\nThe library design will be one which makes use of hierarchical organization. At the base of the design can be spaces which function as reverse engineering centers, where children can become familiar with non-technical forms of information representation, like the book. There is then the need to make spaces which act as learning centers for the grandparent level, where there are an abundance of computers, tablets etc. as well as tutorial and seminar spaces. The parent level will float in a state in between the two.'
            },
            {
              name: 'Light Pillar',
              link: 'Light-Pillar',
              photo: 'https://i.imgur.com/KiyarU4.jpg',
              date: 'Fall 2016',
              professor: 'Alfie Koetter',
              course: 'Core-I',
              description: 'When looking at the site proposal for a new subway station the challenge of filtering down light became my main focus. The formal quality of the station was a vertical shaft with the goal of diffusing natural light and providing an artificial light source at the bottom of the station representing the lost and found space. This station was situated at the corner of 14th street and Avenue A at the northeast corner of the street and taking the space of the medium on the one-way street.\nFormally the specifics of the kinked shaft were arranged using the simple luminosity equation which are dictated between relationships of distance between walls and strength of light sources. So after establishing the relationship between natural light at the top and artificial light below a layer of perforated walls are lined in the form. Behind this perforated wall are a series of lights which act as the metric for the luminosity equation and dictated the form.\nAfter the formal qualities were established the circulation was considered as a separate entity that did not touch any side of the structures walls and hung suspended from the ceiling grate. As for the ceiling, the grate language that occupies most subway ceiling transients is adopted.\nBy playing with the qualities of the natural light of the sun as well as the warm light of the lost and found space below the occupier I can create a sense of unity with nature as well as a feeling of enlightenment by finding the lost and found objects.'
            },
            {
              name: 'Eclipsed',
              link: 'Eclipsed',
              photo: 'https://i.imgur.com/dLXDgVZ.jpg',
              date: 'Fall 2016',
              professor: 'Alfie Koetter',
              course: 'Core-I',
              description: 'This project focused on movement in relation to the horizontal plane, dealing with kinetics and form in architecture. As a precedent for movement through a fluid environment we chose an aquatic creature to study. The animal I chose was a sea turtle. What drew me to this creature was its physical makeup and differing characteristics from its aquatic relatives. The sea turtle, unlike the land turtle, houses its joints on the interior of its shell. So instead of scooping water to swim, it pivots its arms in more of a flying motion. This hidden mechanical facet of the sea turtle was what propelled my form and project through the Under phase. The object itself was proposed to be dropped from a height above the water. A combination of elements inside the cube allows movement through the water, tumbling in a way that\'s related to the materials inside. There was an assortment of both concrete and wood filler molds on the inside of the cube. The concrete was the densest material and the wood casement of the cube was the most buoyant. This final path of movement is meant to be a steady resurface of the cube.'
            },
            {
              name: 'proj5',
              link: 'proj5',
              photo: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/592fc9d19f745641ebf104f7/592fdf0415cf7daeb2973c92/1496309580041/TowersWithin_kvu_StudioLott_%23008BW.jpg?format=1000w',
              date: 'fall 2018',
              professor: 'Alfie Koetter',
              course: 'Core-I',
              description: 'additional description'
            }
          ]
        },
        {
          col: 'col-2',
          items: [
            {
              name: 'Light Forms',
              link: 'Light-Forms',
              photo: 'https://i.imgur.com/Xy1KDSN.jpg',
              date: 'Fall 2016',
              professor: 'Alfie Koetter',
              course: 'Core-I',
              description: 'additional description'
            }
          ]
        }
      ]
    }
  },
  beforeCreate () {
    this.loading = true
    Promise.all(this.projects[0].items.map(project => {
      return axios.get(project.photo)
        .then(res => res.data)
        .catch(e => console.error(e))
    }))
      .then(() => {
        Promise.all(this.projects[1].items.map(project => {
          return axios.get(project.photo)
            .then(res => res.data)
            .catch(e => console.error(e))
        }))
      })
      .then(() => {
        this.loading = false
      })
      .catch(err => console.error(err))
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/abstracts/variables';
@keyframes panel-l-in {
  0% {
    transform: translate(0, 100vh);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes panel-r-in {
  0% {
    transform: translate(0, -100vh);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes slide-up {
  0% {
    transform: translate(0, 110%);
  }
  50% {
    transform: translate(0, 110%);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes panel-l-out {
  0% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(0, 0);
  }
  60% {
    transform: translate(0, -100vh);
  }
  100% {
    transform: translate(0, -100vh);
  }
}
@keyframes panel-r-out {
  0% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(0, 0);
  }
  60% {
    transform: translate(0, 100vh);
  }
  100% {
    transform: translate(0, 100vh);
  }
}
@keyframes project-out {
  0% {
    transform: translate(0, 0);
  }
  40% {
    transform: translate(0, 110%);
  }
  100% {
    transform: translate(0, 110%);
  }
}
@keyframes project-text-out {
  0% {
    opacity: 1;
  }
  10% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.router-leave-active {
  .panel {
    opacity: 1 !important;
    display: block !important;
  }
  .panel-l {
    animation: 2.5s panel-l-out ease-in-out;
  }
  .panel-r {
    animation: 2.5s panel-r-out ease-in-out;
  }
  .project {
    img {
      animation: project-out 2.5s ease;
    }
    &-info {
      animation: project-text-out 2.5s ease;
    }
  }
  animation: 2s;
}
.architecture {
  position: relative;
  overflow: hidden;
  margin-bottom: 360px;
  padding-top: 240px;
  z-index: 100;
  color: $color-greyDark;
  background-color: $color-beigeLighter;
  &-appear-active {
    .panel {
      opacity: 1;
      display: block;
    }
    .panel-l {
      animation: 1s panel-l-in cubic-bezier(.5,0,.5,1);
    }
    .panel-r {
      animation: 1s panel-r-in cubic-bezier(.5,0,.5,1);
    }
    .project {
      img {
        animation: slide-up 3s ease;
      }
      &-text {
        animation: fade-in 3s ease;
      }
    }
    animation: 3s;
  }
}
.panel {
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
    font-size: .66rem;
    font-weight: lighter;
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
      transition: transform 0s cubic-bezier(1,0,0,1), opacity 0s cubic-bezier(.19,1,.22,1);
    }
  }
  &:hover {
    .project-info::before {
      transform: translate3d(100%, -1px, 0);
      opacity: 1;
      transition: transform .6s cubic-bezier(1,0,0,1), opacity 0s cubic-bezier(.19,1,.22,1);
    }
    img {
      filter: grayscale(0);
    }
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
      .project:nth-of-type(1) {
        margin-top: -144px;
      }
    }
  }
}
@media (max-width: $screen-sm-min) {
  .architecture {
    padding-top: 76px;
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
