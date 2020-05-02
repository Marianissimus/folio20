<template>
  <form @submit.prevent="onSubmit" :class="['form', bgColor]">
    <div class="formRow">
      <label for="name">Name</label>
      <input v-model="user.name" type="text" name="name" id="name" class="formRowInput"/>
    </div>
    <div class="formRow">
      <label for="name">Email</label>
      <input v-model="user.email" type="text" name="email" id="email" class="formRowInput"/>
    </div>
    <div class="formRow">
      <label for="message">Message</label>
      <textarea v-model="user.message" name="message" id="message" class="formRowInput"/>
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
      user: {
        name: null,
        email: null,
        message: null
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.user)
    },
    onCancel () {
      this.user = {
        name: null,
        email: null,
        message: null
      }
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  margin: 3em auto;
  color: white;
  font-family: $fontSecondary;
  font-size: 1.2em;
  width: 50vw;
  min-width: 400px;
  padding: 2em;
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
  }
  & .formButtons {
    text-align: center;
    & button {
      color: #777;
      font-size: 1.1rem;
      background-color: white;
      padding: 1em;
      border-radius: 2px;
      border: none;
      cursor: pointer;
      &:nth-of-type(1) {
        margin-right: 10px;
      }
      &:nth-of-type(2) {
        margin-left: 10px;
      }
    }
  }
}
</style>
