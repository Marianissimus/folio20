<template>
  <section id="contact">
    <section-header :title="'Contact me'"/>
    <form novalidate="true"
      id="contactForm"
      @submit.prevent="onSubmit"
      :class="['form', bgColor]">
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
      </div>
      <div class="form-row">
        <label for="name">Name</label>
        <input v-model="user.name" type="text" name="name" id="name" class="form-rowInput"/>
        <transition name="fade">
          <div class="error" v-if="errors.name">{{ errors.name }}</div>
        </transition>
      </div>
      <div class="form-row">
        <label for="name">Email</label>
        <input v-model="user.email" type="email" name="email" id="email" class="form-rowInput"/>
        <transition name="fade">
          <div class="error" v-if="errors.email">{{ errors.email }}</div>
        </transition>
      </div>
      <div class="form-row">
        <label for="message">Message</label>
        <textarea v-model="user.message" name="message" id="message" class="form-rowInput"/>
        <transition name="fade">
          <div class="error" v-if="errors.message">{{ errors.message }}</div>
        </transition>
      </div>
      <transition name="fade" v-if="confirmSent">
      <div class="form-row confirm-message">
        Thank you! Your message was successfully sent!
        <button class="confirm-btn" @click.prevent="clearConfirmation">OK</button>
      </div>
      </transition>
      <div class="form-row form-buttons">
        <button @click.prevent="onCancel" type="reset">Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
    <contact-icons />
  </section>
</template>

<script>
import cmpSectionHeader from '@/components/cmpSectionHeader'
import cmpContactIcons from '@/components/cmpContactIcons'
import firebase from 'firebase/app'
import { db } from '@/firebaseInit'
import 'firebase/auth'

export default {
  components: {
    'section-header': cmpSectionHeader,
    'contact-icons': cmpContactIcons
  },
  data () {
    return {
      errors: this.getEmptyErrors(),
      user: {
        name: null,
        email: null,
        message: null
      },
      confirmSent: false
    }
  },
  methods: {
    getEmptyErrors () {
      return {
        name: null,
        email: null,
        message: null
      }
    },
    onSubmit (e) {
      this.errors = this.getEmptyErrors()
      if (!this.user.name) {
        this.errors.name = 'Name required'
      }
      if (!this.user.email) {
        this.errors.email = 'Email required'
      }
      if (this.user.email && !this.validEmail(this.user.email)) {
        this.errors.email = 'Valid email please'
      }
      if (!this.user.message) {
        this.errors.message = 'Message required'
      }
      let hasNoErrors = !Object.values(this.errors).some(x => (x !== null && x !== ''))
      const toSend = {
        message: this.user.message,
        email: this.user.email,
        name: this.user.name,
        date: new Date().toString()
      }
      if (hasNoErrors) {
        firebase.auth().signInAnonymously().catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message
          console.log(errorCode, errorMessage)
        }).then(function(response){
          if (response) {
            db.collection("contactforms").doc(toSend.date).set(toSend)
           .then(() => {
              console.log("Document successfully added!")
              firebase.auth().signOut().then(() => {
                  console.log('Sign-out successful')
                }).catch(function(error) {
                  console.log('An error happened.', error)
                })
            })
           .catch(function(error) {
            console.error("Error writing document: ", error)
            })
          }
        })
        this.confirmSent = true
        this.onCancel()
      }
      e.preventDefault()
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    onCancel () {
      this.user = {
        name: null,
        email: null,
        message: null
      }
      this.errors = this.getEmptyErrors()
    },
    clearConfirmation () {
      this.confirmSent = false
      this.onCancel()
    }
  }
}
</script>

<style lang="scss">
.form {
  width: 90vw;
  max-width: 900px;
  margin: 2em auto;
  @include shadowNeu;
  color: white;
  font-family: $fontSecondary;
  font-size: 1.2em;
  padding: 2rem 0;
  & .form-row {
    padding: 1em;
    display: block;
    margin: .5em;
    & label {
      vertical-align: top;
      display: inline-block;
      width: 25%;
      padding-right: 1em;
    }
    & .form-rowInput {
      width: 66%;
      padding: 3px 0 5px 7px;
      font-family: $fontSecondary;
      font-size: 1em;
      @media only screen and (max-width: 600px) {
        width: 100%;
        margin-top: 1rem;
      }
    }
    & .error {
      display: inline-block;
      margin-top: 1em;
      margin-left: 30%;
      font-family: $fontSecondary;
      font-size: 1em;
      color: gold;
    }
  }
  & .form-buttons {
    text-align: center;
    & button {
      color: white;
      font-family: $fontTernary;
      font-weight: 100;
      font-size: 1rem;
      padding: 1rem;
      margin-right: 2px;
      background-color: rgba(1, 1, 1, .5);
      font-size: 1.5em;
      transition: background-color .5s ease-in-out;
      box-shadow:
      2px 2px 4px 0 rgba(0, 0, 0, 0.1),
      2px -2px 4px 0 rgba(255, 255, 255, 0.1);
      &:hover {
        background-color: black;
        transition: background-color .5s ease-in-out;
      }
      &:nth-of-type(1) {
        margin-right: 10px;
      }
      &:nth-of-type(2) {
        margin-left: 10px;
      }
    }
  }

  .confirm-message {
    transition: opacity .5s;
    font-size: 1.3em;
    text-align: center;
  }

  .confirm-btn {
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    background-color: rgba(1, 1, 1, .5);
    padding: .4em;
    font-size: .8em;
    font-weight: 200;
    color: white;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
