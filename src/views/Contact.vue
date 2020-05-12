<template>
  <form novalidate="true"
    id="contactForm"
    @submit.prevent="onSubmit"
    :class="['form', bgColor]">
    <div v-if="errors.length">
      <b>Please correct the following error(s):</b>
    </div>
    <div class="formRow">
      <label for="name">Name</label>
      <input v-model="user.name" type="text" name="name" id="name" class="formRowInput"/>
      <transition name="fade">
        <div class="error" v-if="errors.name">{{ errors.name }}</div>
      </transition>
    </div>
    <div class="formRow">
      <label for="name">Email</label>
      <input v-model="user.email" type="email" name="email" id="email" class="formRowInput"/>
      <transition name="fade">
        <div class="error" v-if="errors.email">{{ errors.email }}</div>
      </transition>
    </div>
    <div class="formRow">
      <label for="message">Message</label>
      <textarea v-model="user.message" name="message" id="message" class="formRowInput"/>
      <transition name="fade">
        <div class="error" v-if="errors.message">{{ errors.message }}</div>
      </transition>
    </div>
    <div class="formRow formButtons">
      <button @click.prevent="onCancel" type="reset">Cancel</button>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      errors: this.getEmptyErrors(),
      user: {
        name: null,
        email: null,
        message: null
      }
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
      let isEmpty = !Object.values(this.errors).some(x => (x !== null && x !== ''))
      if (isEmpty) {
        console.log('OK')
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
    }
  }
}
</script>

<style scoped lang="scss">
$ruler: 16px;
$color-red: #AE1100;
$color-bg: #EBECF0;
$color-shadow: #BABECC;
$color-white: #FFF;

.form {
  @include mainCard;
  @include neuShadow;
  color: white;
  font-family: $fontSecondary;
  font-size: 1.2em;
  padding: 2rem 0;
  & .formRow {
    padding: 1em;
    display: block;
    margin: .5em;
    & label {
      vertical-align: top;
      display: inline-block;
      width: 25%;
      padding-right: 1em;
    }
    & .formRowInput {
      width: 66%;
      padding: 3px 0 5px 7px;
      font-family: $fontSecondary;
      font-size: 1em;
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
  & .formButtons {
    text-align: center;
    & button {
      @include bgWhite;
      color: #777;
      font-size: 1.1rem;
      padding: 1em;
      border-radius: 2px;
      border: none;
      cursor: pointer;
      @include neuShadow;
      &:nth-of-type(1) {
        margin-right: 10px;
      }
      &:nth-of-type(2) {
        margin-left: 10px;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
