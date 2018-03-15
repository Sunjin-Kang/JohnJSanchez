<template>
  <section class='about'>
    <div class='bg' />
    <div class='grid'>
      <span
        v-for='(letter, i) in gridName'
        :key='i'
        class='letter'>
        {{ letter }}
      </span>
    </div>
    <h1 class='name'>{{ name }}</h1>
    <h5 class='school'>{{ school }}</h5>
    <p class='biography'>
      Hi world! My name is John, and I was born and raised in Long Island. After attending the University at Buffalo and receiving my Bachelors of Science in Architecture, I moved back to Long Island to pursue graduate study.
      <br/>
      <br/>
      I’m currently enrolled in Columbia University’s Graduate School of Architecture, Planning and Preservation pursuing my Master of Architecture degree. Enjoy the site!
    </p>
  </section>
</template>

<script>

export default {
  name: 'Concept',
  data () {
    return {
      name: 'John Sanchez',
      gridName: 'JOHNJSANCHEZ',
      profilePic: require('@/assets/images/profilePic.jpg'),
      school: 'Columbia GSAPP'
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/abstracts/variables';
.about {
  padding-top: 300px;
  text-align: center;
  margin-bottom: 360px;
  color: $color-greyDark;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: -1;
}
.grid {
  width: 50vw;
  height: calc(50vw * 3 / 4);
  margin: 0 auto;
  background-image: url('../assets/images/profilePic.jpg');
  background-size: cover;
  background-position: 50% 50%;
}
.letter {
  display: inline-flex;
  color: transparent;
  width: 25%;
  height: 33.34%;
  font-size: 10vw;
  border: 3px solid white;
  align-items: center;
  justify-content: center;
  transition: color 2s ease;
  &:hover {
    transition: color .4s ease-out;
    color: white;
  }
}
.name {
  margin-top: 30px;
}
.school {
  margin-bottom: 30px;
}
.biography {
  font-family: garamond;
  width: 50%;
  padding: 30px;
  margin: 0 auto;
  text-align: left;
  font-size: 1.2rem;
  line-height: 2;
}
@media (max-width: $screen-lg-min) {
}
@media (max-width: $screen-md-min) {

}
@media (max-width: $screen-sm-min) {
  .about {
    padding-top: 15px;
    width: 100%;
  }
  .grid {
    width: 100%;
    height: 75vw;
  }
  .letter {
    font-size: 15vw;
  }
  .biography {
    width: 100%;
  }

}
</style>
