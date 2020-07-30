<template>
  <section>
    <form novalidate="true"
      id="loginForm"
      @submit.prevent="login"
      :class="['form', bgColor]">
      <section-header :title="'Login Form'" :fontSize="40" style="margin: 0 auto;"  />
      <div class="form-row">
        <label for="email">Email</label>
        <input v-model="user.email" type="email" name="email" id="email" class="form-rowInput"/>
        <transition name="fade">
          <div class="error" v-if="errors.email">{{ errors.email }}</div>
        </transition>
      </div>
      <div class="form-row">
        <label for="password">Password</label>
        <input v-model="user.password" type="password" name="password" id="password" class="form-rowInput"/>
        <transition name="fade">
          <div class="error" v-if="errors.password">{{ errors.password }}</div>
        </transition>
      </div>
      <btn-w-icon
      type="submit"
      :beforeIcon="'arrow-right'" :afterIcon="'arrow-right'" :text="'Login'" :direction="'right'"/>
    </form>
  </section>
</template>

<script>
import sectionHeader from '@/components/cmpSectionHeader'
import { auth } from '@/firebaseInit'
import { mutations } from '@/store'

export default {
  components: {
    'section-header': sectionHeader
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      errors: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    login () {
      this.errors = {
        email: null,
        password: null
      }
      if (!this.user.email) {
        this.errors.email = 'Email required'
      }
      if (!this.user.password) {
        this.errors.password = 'Password required'
      }
      if (this.user.email && !this.validEmail(this.user.email)) {
        this.errors.email = 'Valid email please'
      }
      let userHasNoErrors = !Object.values(this.errors).some(x => (x !== null && x !== ''))
      if (userHasNoErrors) {
        auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(response => {
          console.log(response, 'ok')
          mutations.setIsUserLoggedIn(true)
          this.$router.replace('/edit')
        }).catch(error => {
          this.error = error.message
        })
        this.onCancel()
      }
    },
    onCancel () {
      this.user = {
        email: '',
        password: ''
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>
