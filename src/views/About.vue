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
      John Sanchez is a student at Columbia GSAPP.....
      <br/>
      <br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac ultricies purus. Phasellus vel eros et elit auctor malesuada non quis mi. Proin est lorem, gravida vitae rutrum ac, convallis ut arcu. Suspendisse condimentum egestas pretium. Phasellus eu orci id est dapibus tempor sed ac purus. Integer aliquam, odio in cursus pharetra, lacus mauris fringilla arcu, et auctor quam lorem ac erat. Ut ex mauris, eleifend dapibus sem ut, auctor efficitur tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vel odio nec dui tempus mattis et tempor enim. Sed a semper lorem, ac lacinia justo. Duis ac imperdiet leo.
      <br/>
      <br/>
      Integer interdum eget sem nec varius. Nulla imperdiet, urna sit amet vehicula facilisis, mauris nisl varius nunc, sed interdum urna sem egestas ex. Aenean accumsan dignissim turpis, sit amet pretium ligula rutrum at. Donec non commodo ante. Vestibulum pretium maximus commodo. Donec accumsan ipsum fringilla, aliquam nibh vel, congue lacus. Vivamus ut imperdiet leo, quis accumsan nunc. Mauris eleifend egestas hendrerit.
      <br/>
      <br/>
      Nam sit amet ultricies quam, in hendrerit eros. Phasellus accumsan tempor viverra. Morbi placerat neque ac eros rutrum, non sagittis arcu tempor. Integer facilisis augue nulla, sit amet cursus felis aliquet ut. Proin scelerisque urna fringilla, fermentum lectus eget, bibendum dui. In ipsum ligula, consectetur non arcu eu, fermentum vehicula odio. Donec lacinia maximus neque ac rhoncus. Mauris gravida dignissim leo, vel efficitur libero aliquam et.
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
  padding: 30px 15px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.5;
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
