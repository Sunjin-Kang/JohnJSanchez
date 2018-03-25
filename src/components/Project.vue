<template>
  <Loading v-if='loading'/>
  <div v-else id='project'>
    <Nav />
    <transition appear appear-active-class='project-appear-active' appear-class='project-appear' appear-to-class='project-appear-to'>
      <section class='project'>
        <div class='project-content'>
          <img class='main-photo' :src='projects[$route.params.project].mainPhoto'/>
          <h1 class='name'>{{ projects[$route.params.project].name}}</h1>
          <h5 class='subtitle'>
            {{ projects[$route.params.project].course }}
            <br/>
             Columbia GSAPP - {{ projects[$route.params.project].professor }} - {{ projects[$route.params.project].date }}
          </h5>
          <p v-for='(paragraph, i) in projects[$route.params.project].description' :key='i' class='description'>{{ paragraph }}</p>
          <div class='photo-gallery'>
            <img
              v-for='(photo, i) in projects[$route.params.project].photos'
              :key='i'
              :src='photo'/>
          </div>
          <!-- <div class='panel'>
            <div class='panel-l'/>
            <div class='panel-r'/>
          </div> -->
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Nav from '@/components/Nav'
// import axios from 'axios'

export default {
  name: 'Architecture',
  components: { Loading, Nav },
  data () {
    return {
      loading: false,
      // currentProject: $route.params.project,
      projects: {
        'Library-for-the-Illiterate': {
          name: 'Library for the Illiterate',
          mainPhoto: 'https://i.imgur.com/cq1pLYK.jpg',
          photos: ['https://i.imgur.com/l36OlFp.jpg?3', 'https://i.imgur.com/psU66xS.jpg?2', 'https://i.imgur.com/g0EVk6l.jpg?1', 'https://i.imgur.com/FSYvToD.jpg?2', 'https://i.imgur.com/CZ49tbA.jpg?2', 'https://i.imgur.com/RMWCNgV.jpg?1', 'https://i.imgur.com/0j89cWJ.jpg?2', 'https://i.imgur.com/9F7ZGmh.jpg?2', 'https://i.imgur.com/SySpHPA.jpg?2', 'https://i.imgur.com/3qUroYQ.jpg?2', 'https://i.imgur.com/zetchsM.jpg?5', 'https://i.imgur.com/cDg2Mex.jpg?3'],
          course: 'Core-II',
          professor: 'Christoph Kumpusch',
          date: 'Spring 2017',
          description: [
            'What does it mean to be technologically illiterate? Does the untrained mind gaze at a computer screen with the same mystified look that a two year old gives to a page of written text? A disconnect clearly exists between older generations and the technology that is becoming part of our everyday lives. This is one of the issues I would like to address in my library design.',
            'I not only want to address the issue of technological illiteracy among the elderly but also attempt to create mediation between technology and humans in a way that focuses on the generational trilogy: the grandparent, parent, and child. By making spaces specific to each level of technological illiteracy a certain hierarchy can be formed which will work to affirm and promote ways of thinking and ways for finding information in the library.',
            'The library design will be one which makes use of hierarchical organization. At the base of the design can be spaces which function as reverse engineering centers, where children can become familiar with non-technical forms of information representation, like the book. There is then the need to make spaces which act as learning centers for the grandparent level, where there are an abundance of computers, tablets etc. as well as tutorial and seminar spaces. The parent level will float in a state in between the two.'
          ]
        },
        'Light-Pillar': {
          name: 'Light Pillar',
          mainPhoto: 'https://i.imgur.com/KiyarU4.jpg',
          photos: ['https://i.imgur.com/iMMhlGB.jpg?3', 'https://i.imgur.com/AKMlfZs.jpg?2', 'https://i.imgur.com/NQ0NkPD.jpg?2', 'https://i.imgur.com/0qD3n1h.jpg?2', 'https://i.imgur.com/xpIUfey.jpg?2', 'https://i.imgur.com/KiyarU4.jpg?2', 'https://i.imgur.com/YdVders.jpg?2', 'https://i.imgur.com/gkFIOaS.jpg?2', 'https://i.imgur.com/8bN3Qpt.jpg?3', 'https://i.imgur.com/ISbLykC.jpg?2'],
          course: 'Core-I',
          professor: 'Alfie Koetter',
          date: 'Fall 2016',
          description: [
            'When looking at the site proposal for a new subway station the challenge of filtering down light became my main focus. The formal quality of the station was a vertical shaft with the goal of diffusing natural light and providing an artificial light source at the bottom of the station representing the lost and found space. This station was situated at the corner of 14th street and Avenue A at the northeast corner of the street and taking the space of the medium on the one-way street.',
            'Formally the specifics of the kinked shaft were arranged using the simple luminosity equation which are dictated between relationships of distance between walls and strength of light sources. So after establishing the relationship between natural light at the top and artificial light below a layer of perforated walls are lined in the form. Behind this perforated wall are a series of lights which act as the metric for the luminosity equation and dictated the form.',
            'After the formal qualities were established the circulation was considered as a separate entity that did not touch any side of the structures walls and hung suspended from the ceiling grate. As for the ceiling, the grate language that occupies most subway ceiling transients is adopted.',
            'By playing with the qualities of the natural light of the sun as well as the warm light of the lost and found space below the occupier I can create a sense of unity with nature as well as a feeling of enlightenment by finding the lost and found objects.'
          ]
        },
        'Eclipsed': {
          name: 'Eclipsed',
          mainPhoto: 'https://i.imgur.com/dLXDgVZ.jpg',
          photos: ['https://i.imgur.com/hutiOeU.jpg?2', 'https://i.imgur.com/dLXDgVZ.jpg?2', 'https://i.imgur.com/7oL9UwI.jpg?2', 'https://i.imgur.com/bYP8i24.jpg?3', 'https://i.imgur.com/9YD28Ep.jpg?2'],
          course: 'Core-I',
          professor: 'Alfie Koetter',
          date: 'Fall 2016',
          description: [
            'This project focused on movement in relation to the horizontal plane, dealing with kinetics and form in architecture. As a precedent for movement through a fluid environment we chose an aquatic creature to study. The animal I chose was a sea turtle. What drew me to this creature was its physical makeup and differing characteristics from its aquatic relatives. The sea turtle, unlike the land turtle, houses its joints on the interior of its shell. So instead of scooping water to swim, it pivots its arms in more of a flying motion. This hidden mechanical facet of the sea turtle was what propelled my form and project through the Under phase. The object itself was proposed to be dropped from a height above the water. A combination of elements inside the cube allows movement through the water, tumbling in a way that\'s related to the materials inside. There was an assortment of both concrete and wood filler molds on the inside of the cube. The concrete was the densest material and the wood casement of the cube was the most buoyant. This final path of movement is meant to be a steady resurface of the cube.'
          ]
        },
        'proj5': {
          name: 'Coming Soon',
          mainPhoto: 'https://static1.squarespace.com/static/57615d253c44d8a0f9a8ae5b/592fc9d19f745641ebf104f7/592fdf0415cf7daeb2973c92/1496309580041/TowersWithin_kvu_StudioLott_%23008BW.jpg?format=1000w',
          photos: [],
          course: 'Core-II',
          professor: 'Alfie Koetter',
          date: 'Spring 2018',
          description: [
            ''
          ]
        },
        'Light-Forms': {
          name: 'Light Forms',
          mainPhoto: 'https://i.imgur.com/Xy1KDSN.jpg',
          photos: ['https://i.imgur.com/mYARUmU.jpg?2', 'https://i.imgur.com/oBF6G5n.jpg?2', 'https://i.imgur.com/Xy1KDSN.jpg?2'],
          course: 'Core-I',
          professor: 'Alfie Koetter',
          date: 'Fall 2016',
          description: [
            'The corner project focused on the idea of rotating a plane of interaction and working with static dynamic spaces. The concept of a hinge was what drove the formal techniques for the Above project. A proto-corner redistributes and translates the urban vertical condition and thusly habitats the façade in a new but similar way. Our site was to be one of the corners situated on 14th street in Manhattan. The corner I chose was the North East corner of 14th and 3rd. Located on this corner was the Coral Tower, a building which housed dorms for NYU students. On the ground floor was a 24 hour Duane Reade.',
            'When I did my field study I happened to be present during the night hours. This happenstance allowed me to study my corner and façade in a unique way. Under the dark conditions of the city one of the main sources of information allowable for me to process was the pattern of lights that projected themselves across either side of my site. Unlike office buildings which often times sit with bays of lights on all through the night, a residential building such as this lends its lighting to a form of activity. I decided to map out the degrees of activity on my corners façade by using the lighting in the windows as a metric. This would ultimately allow me to create a physical form from a non-physical element of my site.',
            'This proto-corner is applicable in any urban corner condition as it relies on the simple metric of activity and light. By creating a physical manifestation of light this corner condition would yield a new shape in each instance giving a varied formal element that can be easily applied over and over again.'
          ]
        }
      }
    }
  },
  beforeCreate () {
    // this.currentProject = this.projects[$route.params.project]
    // this.loading = true
    // Promise.all(this.projects[0].items.map(project => {
    //   return axios.get(project.photo)
    //     .then(res => res.data)
    //     .catch(e => console.error(e))
    // }))
    //   .then(() => {
    //     Promise.all(this.projects[1].items.map(project => {
    //       return axios.get(project.photo)
    //         .then(res => res.data)
    //         .catch(e => console.error(e))
    //     }))
    //   })
    //   .then(() => {
    //     this.loading = false
    //   })
    //   .catch(err => console.error(err))
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
  // .panel {
  //   opacity: 1 !important;
  //   display: block !important;
  // }
  // .panel-l {
  //   animation: 2.5s panel-l-out ease-in-out;
  // }
  // .panel-r {
  //   animation: 2.5s panel-r-out ease-in-out;
  // }
  // .project {
  //   img {
  //     animation: project-out 2.5s ease;
  //   }
  //   &-info {
  //     animation: project-text-out 2.5s ease;
  //   }
  // }
  .project-content {
    transition: 1s ease;
  }
  animation: 1s;
}
.router-leave-to {
  .project-content {
    opacity: 0;
  }
}
.project-appear-active {
  .main-photo {
    transition: 1s ease;
  }
  .name, .subtitle, .description {
    transition: 1s ease;
  }
  .name {
    transition-delay: 1s;
  }
  .subtitle {
    transition-delay: 1.2s;
  }
  .description {
    transition-delay: 2s;
  }
  .photo-gallery > img {
    transition: 1s ease;
    transition-delay: 1s;
  }
  transition: 3s;
  // .panel {
  //   opacity: 1;
  //   display: block;
  // }
  // .panel-l {
  //   animation: 1s panel-l-in cubic-bezier(.5,0,.5,1);
  // }
  // .panel-r {
  //   animation: 1s panel-r-in cubic-bezier(.5,0,.5,1);
  // }
  // animation: 3s;
}
.project-appear {
  .main-photo {
    opacity: 0;
  }
  .name, .subtitle, .description {
    opacity: 0;
    transform: translate(0, 3rem);
  }
  .photo-gallery > img {
    opacity: 0;
  }
}
.project {
  position: relative;
  overflow: hidden;
  margin-bottom: 360px;
  padding-top: 240px;
  z-index: 100;
  color: $color-greyDark;
  background-color: white;
  border-bottom: 1px solid $color-beigeLighter;
}
.project-content {
  margin: 0 auto;
  max-width: 1400px;
  min-height: 100vh;
  width: 80%;
  text-align: center;
}
.main-photo {
  width: 70%;
}
.name {
  color: $color-greyDarker;
  padding: 1rem 0;
  margin: 1rem auto;
  font-variant: small-caps;
  font-size: 2rem;
  letter-spacing: .4rem;
  font-weight: 100;
}
.subtitle {
  font-family: garamond;
  margin-top: 30px;
  margin-bottom: 60px;
  line-height: 1.5;
  color: $color-greyDark;
  font-style: oblique;
  font-size: 1rem;
}
.description {
  font-family: garamond;
  text-align: left;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: $color-grey;
}
.photo-gallery {
  margin-top: 60px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 60px;
  width: 100%;
  img {
    width: 100%;
    margin-bottom: 30px;
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

// .project {
//   margin-bottom: 60px;
//   padding-left: 45px;
//   padding-right: 45px;
//   &-image {
//     display: block;
//     width: 100%;
//     overflow: hidden;
//     > img {
//       position: relative;
//       width: 100%;
//       height: auto;
//       filter: grayscale(100%);
//       transition: filter .5s ease-out;
//     }
//   }
//   &:nth-of-type(odd) {
//     float: left;
//     clear: left;
//   }
//   &:nth-of-type(even) {
//     float: right;
//     clear: right;
//   }
//   &-text {
//     position: relative;
//     text-align: left;
//     margin-top: 10px;
//     overflow: hidden;
//   }
//   &-info {
//     display: inline-block;
//     position: relative;
//     text-transform: uppercase;
//     font-size: .66rem;
//     font-weight: lighter;
//     letter-spacing: .12rem;
//     overflow: hidden;
//     transition: all .4s cubic-bezier(.645,.045,.355,1);
//     &::before {
//       content: "";
//       background: #333;
//       display: block;
//       width: 100%;
//       height: 2px;
//       position: absolute;
//       top: 50%;
//       bottom: 0;
//       opacity: 0;
//       transform: translate3d(-100%, -1px, 0);
//       transition: transform 0s cubic-bezier(1,0,0,1), opacity 0s cubic-bezier(.19,1,.22,1);
//     }
//   }
//   &:hover {
//     .project-info::before {
//       transform: translate3d(100%, -1px, 0);
//       opacity: 1;
//       transition: transform .6s cubic-bezier(1,0,0,1), opacity 0s cubic-bezier(.19,1,.22,1);
//     }
//     img {
//       filter: grayscale(0);
//     }
//   }
// }
@media (max-width: $screen-lg-min) {
  .project-content {
    width: calc(80% - 90px);
  }
}
@media (max-width: $screen-md-min) {
  .project-content {
    width: calc(80% - 60px);
  }
}
@media (max-width: $screen-sm-min) {
  .project {
    padding-top: 76px;
    padding-bottom: 30px;
  }
  .project-content {
    width: 100%;
    padding: 0 15px;
  }
}
</style>
