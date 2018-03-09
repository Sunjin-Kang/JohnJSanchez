<template>
  <transition name='nav' mode='out-in'>
    <nav class='nav'>
      <div class='nav-wrapper'>
        <router-link class='name' to='/'>
          {{ name }}
        </router-link>
        <ul class='nav-main'>
          <router-link
            class='link'
            tag='li'
            v-for='(link, i) in links'
            :key='i'
            :to='link'>
              <a>{{ link }}</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      name: 'John J Sanchez',
      links: ['Architecture', 'Concept', 'About', 'Contact']
    }
  }
}
</script>

<style lang='scss' scoped>
.nav-enter-active {
  transition: all 1s ease;
}
.nav-leave-active {
  transition: all 1s ease;
}
.nav-enter, .nav-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

.nav {
  position: absolute;
  opacity: 1;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 36px 0;
  width: 100%;
  text-rendering: optimizeLegibility;
  &-wrapper {
    position: relative;
    width: 100%;
    padding: 0 42px;
  }
}
.name {
  position: absolute;
  font-size: 1.05rem;
  line-height: 36px;
  z-index: 1000;
}
.nav-main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  height: 36px;
  line-height: 36px;
}
.link {
  height: 36px;
  font-size: .72rem;
  letter-spacing: .18rem;
  font-weight: lighter;
  text-transform: uppercase;
  margin: 0 1rem;
  > a {
    position: relative;
    border-bottom: 1px solid transparent;
    line-height: 1.2rem;
    padding-bottom: 4px;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: #d8d7d6;
      transform-origin: bottom right;
      transition: transform 0.4s ease-out;
    }
    &:hover {
      &::after{
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
}
</style>
