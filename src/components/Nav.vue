<template>
  <transition appear appear-active-class='nav-appear-active'>
    <nav class='nav'>
      <div class='nav-wrapper'>
        <router-link :class='darkTheme ? "nav-name dark" : "nav-name"' :to='{ name: "Landing" }' exact>
          {{ name }}
        </router-link>
        <button :class='btnActive ? "btn active" : "btn"' @click='btnHandler'><span class='btn-1'><span class='btn-1-1'/></span></button>
        <div :class='!btnActive ? "nav-menu active" : "nav-menu"'>
          <ul class='nav-main'>
            <li
              class='nav-link'
              v-for='(link, i) in links'
              :key='i'
              >
              <router-link
                :to='{ name: link }'
                :class='darkTheme ? "dark" : ""'
                exact>{{ link }}
              </router-link>
            </li>
          </ul>
          <div class='nav-contact'>
            <router-link :class='darkTheme ? "contact-link dark" : "contact-link"' :to='{ name: "Contact" }' exact>
              <div class='contact-link-txt'>
                <span class='contact-link-txt__default'>
                  <span
                    v-for='(letter, i) in contact'
                    :key='i'
                    :class='`letter-${i+1}`'>
                    {{ letter }}
                  </span>
                </span>

                <span class='contact-link-txt__hover'>
                  <span
                    v-for='(letter, i) in contact'
                    :key='i'
                    :class='`letter-${i+1}`'>
                    {{ letter }}
                  </span>
                </span>
              </div>
            </router-link>
          </div>
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
      name: 'John Sanchez',
      links: ['About', 'Architecture', 'Concept'],
      contact: 'Contact',
      btnActive: false,
      darkTheme: this.$route.path === '/Concept'
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
@keyframes nav-in {
  0% {
    transform: translate(0, -30%);
    opacity: 0;
  }
  75% {
    transform: translate(0, -30%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes nav-out {
  0% {
    transform: translate(0, 0);
  }
  5% {
    transform: translate(0, 0);
  }
  30% {
    transform: translate(0, -50%);
    opacity: 0;
  }
  100% {
    transform: translate(0, -50%);
    opacity: 0;
  }
}
.router-leave-active {
  .nav {
    animation: nav-out 2.5s ease-out;
  }
}
.nav {
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  z-index: 10000;
  padding: 36px 0;
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
    z-index: -1;
  }
  &-name {
    position: absolute;
    font-size: 1.25rem;
    line-height: 36px;
    left: 60px;
    &.dark {
      color: $color-greyLightest;
    }
  }
  &-contact {
    color: $color-greyDark;
    float: right;
    > a {
    }
    &.dark {
      color: $color-greyLightest;
    }
  }
  &-appear-active {
    animation: nav-in 3s ease-out;
  }
}
.contact-link {
  display: inline-block;
  position: relative;
  color: $color-greyDarker;
  text-transform: uppercase;
  text-align: center;
  font-weight: lighter;
  font-size: .72rem;
  letter-spacing: .24em;
  padding: .75em 1em;
  border: 1px solid $color-greyLighter;
  overflow: hidden;
  z-index: 1;
  transition: transform .4s cubic-bezier(.7, 0, .3, 1), border .4s ease-out;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: $color-greyDarker;
    transform: translateY(100%);
    transition: transform .4s cubic-bezier(.7, 0, .3, 1);
  }
  &:hover {
    border: 1px solid $color-greyDarker;
    &::before {
      transform: translateY(0);
    }
    .contact-link-txt {
      &__hover {
        transform: translateY(0);
        > * {
          transform: translateY(0) !important;
        }
      }
    }
  }
  &:not(:hover) {
    .contact-link-txt {
      &__default > * {
        transform: translateY(0) !important;
      }
    }
  }
  &-txt {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    > span {
      display: inline-block;
      transition: transform .4s cubic-bezier(.7, 0, .3, 1);
      > * {
        position: relative;
        display: inline-block;
        transition: transform .6s cubic-bezier(.7, 0, .3, 1);
      }
    }
    &__default {
      position: relative;
      @for $i from 1 through 7 {
        $num: random(100) * -1 - 20;
        .letter-#{$i} {
          transform: matrix(1, 0, 0, 1, 0, $num);
        }
      }
    }
    &__hover {
      position: absolute;
      color: $color-greyLightest;
      top: 0;
      left: 0;
      right: 0;
      transform: translateY(calc(2.5em + 4px));
      @for $i from 1 through 7 {
        $num: random(50) + 5;
        .letter-#{$i} {
          transform: matrix(1, 0, 0, 1, 0, $num);
        }
      }
    }
  }
  &.dark {
    color: $color-greyLightest;
    border: 1px solid $color-grey;
    &:hover {
      border: 1px solid $color-greyLightest;
    }
    &::before {
      background-color: $color-greyLightest;
    }
    .contact-link-txt__hover {
      color: $color-greyDarker;
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    border-style: inset;
  }
}
.nav-link {
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
    &.dark {
      color: $color-greyLightest;
      &::after {
        background-color: $color-grey;
      }
    }
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: $color-greyLighter;
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
@media (max-width: $screen-lg-min) {
  .nav {
    &-name {
      left: 45px;
    }
    &-wrapper {
      padding: 0 45px;
    }
  }
  .nav-link {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
}
@media (max-width: $screen-md-min) {
  .nav {
    &-name {
      left: 30px;
    }
    &-contact {
      display: block;
    }
    &-wrapper {
      padding: 0 30px;
    }
    &-main {
      position: relative;
      display: inline-block;
      // float: left;
      margin-left: 160px;
      text-align: left;
      width: auto;
      left: auto;
      top: auto;
    }
  }
}
@media (max-width: $screen-sm-min) {
  .btn {
    display: block;
  }
  .nav {
    position: fixed;
    padding: 0;
    background-color: #fff;
    height: 60px;
    &-name {
      left: 0;
      padding: 15px;
      color: $color-greyDark !important;
    }
    &-contact {
      float: none;
      margin-left: 15px;
    }
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
  .nav-link {
    display: block;
    height: auto;
    margin-left: 0;
    margin-right: 0;
    line-height: 1.4;
    > a {
      color: $color-greyDark !important;
    }
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  .contact-link {
    width: calc(100% - 15px);
    background-color: $color-greyDarker;
    border-color: $color-greyDarker !important;
    &:hover {
      border-color: $color-greyLightest !important;
    }
  }
}
</style>
