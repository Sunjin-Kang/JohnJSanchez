<template>
  <Loading v-if='loading' />

  <div v-else>
    <Nav />
    <transition appear appear-active-class='contact-appear-active' appear-class='contact-appear' appear-to-class='contact-appear-to'>
      <div class='contact'>
        <div class='contact-left'>
          <div class='contact-left__default'>
            <div class='contact-left__default-window'/>
            <img :src='photo' />
          </div>
          <div :class='showForm ? "contact-left__form show": "contact-left__form"'>
            <div class='contact-form'>
              <h2 class='form-heading'>Send me a Message</h2>

              <form class='form' @submit.prevent='handleSubmit'>
                <div class='basic-info'>
                  <div class='first-name'>
                    <input v-model='firstName' @change='firstNameErr = false' placeholder='First Name *' type='test' :class='{"err" : firstNameErr}'/>
                  </div>
                  <div class='last-name'>
                    <input v-model='lastName' @change='lastNameErr = false' placeholder='Last Name *' type='text' :class='{"err" : lastNameErr}'/>
                  </div>
                  <div class='email'>
                    <input v-model='email' @change='emailErr = false' placeholder='E-Mail *' type='email' :class='{"err" : emailErr}'/>
                  </div>
                  <div class='subject'>
                    <input v-model='subject' placeholder='Subject' type='text'/>
                  </div>
                </div>
                <textarea v-model='message' @change='messageErr = false' placeholder='Message *' rows='4' :class='{"message": true, "err" : messageErr}'/>
                <button class='send' type='submit'>
                  <div class='send-txt'>
                    <span class='send-txt__default'>
                      <span
                        v-for='(letter, i) in sendButton'
                        :key='i'
                        :class='`letter-${i+1}`'>
                        {{ letter }}
                      </span>
                    </span>
                    <span class='send-txt__hover'>
                      <span
                        v-for='(letter, i) in sendButton'
                        :key='i'
                        :class='`letter-${i+1}`'>
                        {{ letter }}
                      </span>
                    </span>
                  </div>
                </button>
              </form>
              <div v-if='emailSent' class='form-response'>
                Email has been sent
              </div>
            </div>
          </div>
        </div>
        <div class='contact-right'>
          <div class='greeting'>
            <div class='greeting-message'>
              <div class='greeting-message__header'>
                <span class='greeting-message__header--enter step-1' />
                <h3 class='step-1'>Contact Me</h3>
              </div>
              <div class='greeting-message__info step-1'>
                <p>
                  Feel free to reach out.
                  <br/>
                  For any questions, opportunities,
                  <br/>
                  or just to exchange a few words about <span style='font-style: italic'>Architecture</span>.
                </p>
              </div>
            </div>
            <div class='greeting-message'>
              <div class='greeting-message__header'>
                <span class='greeting-message__header--enter step-2' />
                <h3 class='step-2'>Write Me</h3>
              </div>
              <div class='greeting-message__info step-2'>
                <p>
                  <a :href="`mailto:${johnEmail}`" class='btn-contact' target="_top">
                    <span class='arrow'/>
                    {{ johnEmail }}
                  </a>
                  <br/>
                  <a href='#' @click='toggleForm' class='btn-contact toggle-form'>
                    <span class='arrow'/>
                    Contact Form
                  </a>
                </p>
              </div>
            </div>
            <div class='greeting-message'>
              <div class='greeting-message__header'>
                <span class='greeting-message__header--enter step-3' />
                <h3 class='step-3'>Social</h3>
              </div>
              <div class='greeting-message__info step-3'>
                <p>
                  <a href="https://www.facebook.com/john.sanchez.372019" target='_blank' class='btn-contact'>
                    <span class='arrow'/>
                    Facebook
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '@/components/Loading'
import Nav from '@/components/Nav'

export default {
  name: 'Contact',
  components: { Loading, Nav },
  data () {
    return {
      loading: false,
      photo: 'https://i.imgur.com/FOapUa7.jpg',
      showForm: false,
      johnEmail: 'John.Sanchez@Columbia.edu',
      sendButton: 'SEND',
      subject: '',
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      subjectErr: false,
      firstNameErr: false,
      lastNameErr: false,
      emailErr: false,
      messageErr: false,
      emailSent: false
    }
  },
  methods: {
    toggleForm () {
      this.showForm = !this.showForm
    },
    handleSubmit (e) {
      console.log('I"M HERE AT HANDLE SUBMIT')
      const { firstName, lastName, subject, email, message } = this
      const letter = {
        subject: this.subject.length > 0 ? this.subject : 'No Subject',
        html: `<b>Name:</b> ${firstName} ${lastName} <br/>
        <b>Email: </b>${email}<br/><br/>
        ${message}`
      }
      if (firstName === '') {
        this.firstNameErr = true
      }
      if (lastName === '') {
        this.lastNameErr = true
      }
      if (email === '') {
        this.emailErr = true
      }
      if (message === '') {
        this.messageErr = true
      }
      if (firstName && lastName && email && message) {
        axios.post('/api/contact', letter)
          .then(res => res.data)
          .then(response => {
            if (response) {
              this.firstName = ''
              this.lastName = ''
              this.subject = ''
              this.email = ''
              this.message = ''
              this.emailSent = true
            }
          })
      }
    }
  },
  mounted () {
    // this.loading = true
    // setTimeout(() => {
    //   this.loading = false
    // }, 500)
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/abstracts/variables';
.router-leave-active {
  .contact-left {
    transition: 1s ease-in-out;
    transition-delay: .5s;
  }
  h3 {
    &.step-1 {
      transition: opacity .3s ease, transform .5s ease;
      transition-delay: .5s;
    }
    &.step-2 {
      transition: opacity .3s ease, transform .5s ease;
      transition-delay: .7s;
    }
    &.step-3 {
      transition: opacity .3s ease, transform .5s ease;
      transition-delay: .8s;
    }
  }
  .greeting-message__info {
    &.step-1 {
      transition: opacity .3s ease, transform .5s ease;
      transition-delay: .6s;
    }
    &.step-2 {
      transition: opacity .3s ease, transform .5s ease;
      transition-delay: .8s;
    }
    &.step-3 {
      transition: opacity .3s ease, transform .5s ease;
      transition-delay: 1s;
    }
  }
  transition: 2s;
}
.router-leave-to {
  .contact-left {
    transform: translate(0, 100%);
  }
  h3 {
    &.step-1 {
      opacity: 0;
      transform: translate(0, 2rem);
    }
    &.step-2 {
      opacity: 0;
      transform: translate(0, 2rem);
    }
    &.step-3 {
      opacity: 0;
      transform: translate(0, 2rem);
    }
  }
  .greeting-message__info {
    &.step-1 {
      opacity: 0;
      transform: translate(0, 2rem);
    }
    &.step-2 {
      opacity: 0;
      transform: translate(0, 2rem);
    }
    &.step-3 {
      opacity: 0;
      transform: translate(0, 2rem);
    }
  }
}
.contact-appear-active {
  .contact-left {
    transition: all 1s ease;
    &__default-window {
      transition: 1s ease;
      transition-delay: 1.1s;
    }
  }
  .greeting-message__header {
    &--enter {
      transition: 1s cubic-bezier(0,1,.5,0);
      transition-delay: 1s;
      &.step-2 {
        transition-delay: 1.5s;
      }
      &.step-3 {
        transition-delay: 2s;
      }
    }
    h3 {
      &.step-1 {
      transition: .3s ease-in;
      transition-delay: 1s;
      }
      &.step-2 {
        transition: .3s ease-in;
        transition-delay: 1.55s;
      }
      &.step-3 {
        transition: .3s ease-in;
        transition-delay: 2.05s;
      }
    }
  }
  .greeting-message__info {
    &.step-1 {
      transition: all .5s ease;
      transition-delay: 1.8s;
    }
    &.step-2 {
      transition: all .5s ease;
      transition-delay: 2.3s;
    }
    &.step-3 {
      transition: all .5s ease;
      transition-delay: 2.8s;
    }
  }
  transition: 3.5s;
}
.contact-appear {
  .contact-left {
    transform: translate(100%, 0);
    &__default-window {
      transform: translate(-3%, 0);
    }
  }
  .greeting-message__header {
    &--enter {
      transform: translate(-204%, 0);
    }
    h3 {
      opacity: 0;
    }
  }
  .greeting-message__info {
    &.step-1, &.step-2, &.step-3 {
      opacity: 0;
      transform: translate(0, 1rem);
    }
  }
}
.contact-appear-to {
  .greeting-message__header--enter {
  }
  .contact-left__default-window {
  }
  h3 {
  }
}
.contact {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &-left, &-right {
    position: fixed;
    width: 50%;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-left {
    left: 0;
    background-color: $color-beigeLighter;
  }
  &-right {
    left: 50%;
    background-color: white;
  }
}
.contact-left {
  display: flex;
  justify-content: center;
  align-items: center;
  &__default {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 10;
    > img {
      width: auto;
      max-width: 35vw;
      max-height: 55vh;
      vertical-align: middle;
    }
    &-window {
      position: absolute;
      top: 0;
      bottom: 0;
      left: -5%;
      right: -5%;
      transform: translate(100%, 0);
      z-index: 1;
      background-color: $color-beigeLighter;
    }
  }
  &__form {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    z-index: 1000;
    background-color: #f3f0ed;
    transition: all .7s ease;
    &.show {
      display: flex;
      bottom: 0%;
      transition: all .7s cubic-bezier(.17,.6,.44,.93);
    }
  }
}
.contact-form {
  position: relative;
  width: 100%;
  max-width: 600px;
  padding-left: 45px;
  padding-right: 45px;
  margin: 0 auto;
  .form-heading {
    font-size: 1.2rem;
    font-weight: 100;
    color: $color-grey;
    letter-spacing: .2rem;
    margin-bottom: 60px;
  }
}
.form {
  .basic-info {
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  &-response {
    font-size: .8rem;
    font-weight: 100;
    position: relative;
    top: 30px;
    padding: 5px 20px;
    text-align: center;
    background-color: $color-beigeLight;
  }
  .first-name, .last-name, .email, .subject {
    width: 100%;
    flex-basis: 50%;
    max-width: 50%;
    flex: 0 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    input {
      display: block;
      width: 100%;
      margin-bottom: 30px;
      background-color: transparent;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 1px solid $color-greyLight;
      padding: 8px 0;
      color: $color-greyDark;
      font-size: .72rem;
      letter-spacing: .12rem;
      line-height: 1.25;
      background-image: none;
      background-clip: padding-box;
      transition: all .4s ease-out;

      &.err {
        border-color: $color-red;
      }
    }
  }
  .message {
    width: 100%;
    resize: none;
    min-height: 80px;
    padding: 8px 0;
    font-size: .72rem;
    letter-spacing: .12rem;
    line-height: 1.25;
    color: $color-greyDark;
    background-color: transparent;
    background-image: none;
    background-clip: padding-box;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 1px solid $color-greyLight;
    margin-bottom: 30px;
    transition: all .4s ease-out;
    &.err {
      border-color: $color-red;
    }
  }
  .send {
    cursor: pointer;
    width: 100%;
    color: $color-greyDarker;
    display: inline-block;
    position: relative;
    padding: 8px 42px;
    text-align: center;
    text-decoration: none;
    overflow: hidden;
    font-weight: 500;
    letter-spacing: .1rem;
    font-size: .74rem;
    border: 0;
    transition: all .4s ease-out;
    line-height: 1.5rem;
    background-color: $color-greyDark;
    border-radius: 0;
    z-index: 1;
    transition: all .4s cubic-bezier(.7, 0, .3, 1);
    &::before {
      content: '';
      position: absolute;
      background-color: $color-greyLight;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      outline-offset: 1px;
      transform: translate(0, 100%);
      transition: all .4s cubic-bezier(.7, 0, .3, 1);
    }
    &:hover {
      &::before {
        transform: translate(0, 0);
      }
      .send-txt__hover {
        transform: translate(0, 0);
        > * {
          transform: translate(0, 0) !important;
        }
      }
    }
    &:not(:hover) {
      .send-txt__default {
        > * {
          transform: translate(0, 0) !important;
        }
      }
    }
  }
  .send-txt {
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
      color: $color-greyLightest;
      @for $i from 1 through 4 {
        $num: random(100) * -1 - 40;
        .letter-#{$i} {
          transform: matrix(1, 0, 0, 1, 0, $num);
        }
      }
    }
    &__hover {
      position: absolute;
      color: $color-greyDarker;
      top: 0;
      left: 0;
      right: 0;
      transform: translate(0, calc(2.5em + 4px));
      @for $i from 1 through 4 {
        $num: random(50) + 10;
        .letter-#{$i} {
          transform: matrix(1, 0, 0, 1, 0, $num);
        }
      }
    }
  }
}
.greeting {
  color: $color-grey;
  width: 100%;
  padding: 0 5%;
  overflow: hidden;
  p {
    font-family: garamond;
    color: $color-greyDark;
    line-height: 1.25rem;
    margin-bottom: 15px;
  }
  h3 {
    color: $color-grey;
    font-weight: 100;
    font-variant: small-caps;
    // text-transform: uppercase;
    font-size: 1.15rem;
    letter-spacing: .15rem;
    margin-bottom: .5rem;
  }
  &-message {
    overflow: hidden;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
    .greeting-message__header {
      position: relative;
      display: inline-block;
      overflow: hidden;
      &--enter {
        display: block;
        position: absolute;
        z-index: 10;
        top: 0;
        left: 101%;
        width: 100%;
        height: 100%;
        background-color: $color-greyDarker;
      }
    }
  }
  .btn-contact {
    display: inline-block;
    color: $color-grey;
    line-height: 16px;
    height: 16px;
    margin-right: 50px;
    transition: all .3s ease-out;
    &:hover {
      color: $color-greyDark;
      .arrow {
        transform: translateX(100%);
        &::before {
          transform: translate3d(0,2px,0) rotate(-45deg);
        }
        &::after {
          transform: translate3d(0,-2px,0) rotate(45deg);
        }
      }
    }
  }
  .arrow {
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    margin-right: 15px;
    transition: all .3s ease;
    transform: translateX(0);
    top: 3px;
    &::before, &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 7px;
      height: 1px;
      transform-origin: center;
      pointer-events: none;
      background: $color-greyDarker;
      transition: all .5s ease;
    }
    &::before {
      transform: translate3d(0, 0, 0) rotate(45deg) scale(.9);
    }
    &::after {
      transform: translate3d(0, 0, 0) rotate(-45deg) scale(.9);
    }
  }
}
@media (max-width: $screen-lg-min) {
}
@media (max-width: $screen-md-min) {
  .form {
    .first-name, .last-name, .email, .subject {
      width: 100%;
      flex-basis: 100%;
      max-width: 100%;
      flex: 0 0 auto;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}
@media (max-width: $screen-sm-min) {
  .contact {
    height: auto;
    padding-top: 60px;
    padding-bottom: 30px;
  }
  .contact-left {
    position: relative;
    top: auto;
    left: auto;
    bottom: auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 30px;
    width: 100%;
    flex-direction: column;
    &__default {
      padding-top: 15px;
      width: 100%;
      > img {
        width: 100%;
        height: auto;
        max-width: none;
        max-height: none;
      }
      &-window {
        background-color: $color-beigeLighter;
        left: 100%;
      }
    }
    &__form {
      display: block !important;
      position: relative;
      left: auto !important;
      top: auto;
      background-color: $color-beigeLighter;
      padding: 0;
      margin-top: 30px;
    }
  }
  .contact-right {
    position: relative;
    top: auto;
    left: auto;
    bottom: auto;
    padding: 15px;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    .greeting {
      padding: 0;
    }
  }
  .greeting {
    &-message {
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
    .toggle-form {
      display: none;
    }
  }
  .contact-form {
    padding-left: 0;
    padding-right: 0;
    max-width: none;
    .form-heading {
      margin-bottom: 20px;
    }
  }
}
</style>
