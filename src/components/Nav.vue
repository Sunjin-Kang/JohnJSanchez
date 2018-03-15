<template>
  <transition name='nav' mode='out-in'>
    <nav class='nav'>
      <div class='nav-wrapper'>
        <router-link class='name' to='/' exact>
          {{ name }}
        </router-link>
        <button :class='btnActive ? "btn active" : "btn"' @click='btnHandler'><span class='btn-1'><span class='btn-1-1'/></span></button>
        <div :class='!btnActive ? "nav-menu active" : "nav-menu"'>
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
      links: ['Architecture', 'Concept', 'About', 'Contact'],
      btnActive: false
    }
  },
  methods: {
    btnHandler () {
      this.btnActive = !this.btnActive
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/abstracts/variables';
.nav-enter-active {
  transition: all 1s ease;
}
.nav-leave-active {
  transition: all 1s ease;
}
.nav-enter, .nav-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.nav {
  position: absolute;
  opacity: 1;
  top: 0;
  left: 0;
  z-index: 10000;
  padding: 72px 0;
  width: 100%;
  color: $color-greyDark;
  text-rendering: optimizeLegibility;
  &-wrapper {
    position: relative;
    width: 100%;
    padding: 0 60px;
  }
  &-main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    height: 36px;
    line-height: 36px;
  }
}
.name {
  position: absolute;
  font-size: 1.25rem;
  line-height: 36px;
  z-index: 1000;
  left: 60px;
}
.btn {
  float: right;
  padding: 19px 15px;
  border: 0;
  background: none;
  cursor: pointer;
  height: 60px;
  outline: 0;
  display: none;
  &-1 {
    position: relative;
    display: inline-block;
    width: 26px;
    height: 20px;
    &-1 {
      position: absolute;
      left: 0;
      bottom: 0;
      top: auto;
      height: 3px;
      width: 100%;
      background-color: #333;
      transition-delay: .21s;
      transition-timing-function: cubic-bezier(.215,.61,.355,1);
      transition-duration: .15s;
      .active & {
        transform: translate3d(0,-10px,0) rotate(-45deg);
        transition-delay: .21s;
        transition-timing-function: cubic-bezier(.215,.61,.355,1);
      }
      &::before, &::after {
        position: absolute;
        left: 0;
        width: 100%;
        height: 3px;
        transition-timing-function: ease;
        transition-duration: .15s;
        background-color: #333;
        display: block;
        content: "";
      }
      &::before {
        top: -8px;
        transition: top .12s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .1s cubic-bezier(.55,.055,.675,.19);
        .active & {
          top: 0;
          transform: rotate(-90deg);
          transition: top .12s cubic-bezier(.33333,0,.66667,.33333) .12s,transform .1s cubic-bezier(.215,.61,.355,1) .42s;
        }
      }
      &::after {
        top: -16px;
        transition: top .2s cubic-bezier(.33333,.66667,.66667,1) .2s,opacity .7s linear;
        .active & {
          top: 0;
          transition: top .3s cubic-bezier(.33333,0,.66667,.33333),opacity .1s linear .18s;
          opacity: 0;
        }
      }
    }
  }
}
.link {
  display: inline-block;
  height: 36px;
  font-size: .72rem;
  letter-spacing: .18rem;
  font-weight: lighter;
  text-transform: uppercase;
  padding: 0;
  &:not(:last-child) {
    margin-right: 50px;
  }
  > a {
    position: relative;
    border-bottom: 1px solid transparent;
    line-height: 1.2rem;
    padding-bottom: 4px;
    color: $color-greyDark;
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
@media (max-width: $screen-lg-min) {
  .name {
    left: 45px;
  }
  .nav {
    &-wrapper {
      padding: 0 45px;
    }
  }
  .nav-main {
  }
  .link {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
}
@media (max-width: $screen-md-min) {
  .name {
    left: 30px;
  }
  .nav {
    &-wrapper {
      padding: 0 30px;
    }
    &-main {
      position: relative;
      margin-left: 180px;
      text-align: left;
      width: auto;
      left: auto;
      top: auto;
    }
  }
}
@media (max-width: $screen-sm-min) {
  .name {
    left: 0;
    padding: 15px;
  }
  .btn {
    display: block;
  }
  .nav {
    position: relative;
    padding: 0;
    background-color: #fff;
    height: 60px;
    &-wrapper {
      padding: 0;
    }
    &-menu {
      height: 300px;
      max-height: fit-content;
      position: relative;
      width: 100%;
      overflow: hidden;
      background-color: #fff;
      border-bottom: 1px solid #efefef;
      transition: all .3s ease-in-out;
      &.active {
        height: 0;
      }
    }
    &-main {
      float: none;
      background-color: #fff;
      padding: 15px;
      height: auto;
      line-height: 1.4;
      z-index: auto;
      margin-left: 0;
    }
  }
  .link {
    display: block;
    height: auto;
    margin-left: 0;
    margin-right: 0;
    line-height: 1.4;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>
