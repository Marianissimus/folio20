<template>
  <section class="projects-editor">
    <div class="form-row" style="text-align: right">
      <button class="edit-buttons" @click="logOut" aria-label="Log out">Log out</button>
    </div>
    <section-header :title="'Received contact forms'" style="margin-top: 80px;"/>
      <div id="emails" class="form">
        <p v-if="!contactForms.length" style="text-align: center; font-size: 30px;">No emails</p>
        <ul class="projects-list">
          <li v-for="(item, index) in contactForms" :key="index" class="email-row">
            <p>
              <span v-if="item.date">Date is: {{ item.date.toLocaleString() }} </span>
              <button class="edit-buttons" @click="deleteEmail(item.date)" aria-label="Delete email">X</button>
            </p>
            <p>Sender is: {{ item.name }} </p>
            <p>Email is: {{ item.email }} </p>
            <p>Message is: {{ item.message }} </p>
            <hr />
          </li>
        </ul>
      </div>
    <section-header :title="'Edit projects'" style="margin-top: 80px;"/>
    <div class="edit-content form">
      <form id="edit-form" @submit.prevent="saveProject">
        <section-header :title="'Add new'" :fontSize="40" style="margin-bottom: 0; width: 150px;"/>
        <button @click="addnew" class="edit-buttons" aria-label="Add via console">Add new via code</button>
        <fieldset>
          <div class="form-row">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" v-model="editing.name">
          </div>
          <div class="form-row">
            <label for="position">Position</label>
            <input type="number" name="position" id="position" v-model.number="editing.position">
          </div>
          <div class="form-row">
            <label for="pic">Picture</label>
            <input type="text" name="pic" id="pic" v-model="editing.pic">
          </div>
          <div class="form-row">
            <label for="urls.github">Github:</label>
            <input type="text" name="github" id="github" v-model="editing.urls.github">
          </div>
          <div class="form-row">
            <label for="codepen">Codepen:</label>
            <input type="text" name="codepen" id="codepen" v-model="editing.urls.codepen">
          </div>
          <div class="form-row">
            <label for="browser">Browser url:</label>
            <input type="text" name="browser" id="browser" v-model="editing.urls.browser">
          </div>
          <div class="form-row">
            <label for="tags">Tags, coma separated:</label>
            <input type="text" name="tags" id="tags" v-model="editing.tags[0]">
          </div>
          <div class="form-row">
            <label for="featured">Featured on Main Page:</label>
            <input type="checkbox" name="featured" id="featured" v-model="editing.featured">
          </div>
          <div class="form-row">
            <label for="description">Description</label>
            <textarea name="description" id="description" rows="6" v-model="editing.description" />
          </div>
          <div class="form-row form-buttons">
            <button type="submit" v-if="isEditingExisting" aria-label="Save project">Save</button>
            <button type="submit" v-else aria-label="Add project">Add</button>
            <button @click.prevent="cancel" aria-label="Cancel project">Cancel</button>
          </div>
        </fieldset>
      </form>
      <div>
        <section-header :title="'Edit existing'" :fontSize="40" style="margin-bottom: 0"/>
        <ul class="projects-list">
          <li v-for="project in projects" :key="project.name">
            <button @click="edit(project)" class="edit-buttons" aria-label="Edit project">{{ project.name }}</button>
            <span> </span>
            <button @click="remove(project.name)" class="edit-buttons" aria-label="Remove project">X</button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '@/firebaseInit'
import cmpSectionHeader from '@/components/cmpSectionHeader'
import 'firebase/auth'
import { mutations } from '@/store'

export default {
  components: {
    'section-header': cmpSectionHeader
  },
  data () {
    return {
      editing: this.getEmptyProject(),
      isEditingExisting: false,
      projects: [],
      contactForms: []
    }
  },
  created () {
     this.projects = JSON.parse(localStorage.getItem('projects'))
     this.getEmails()
  },
  methods: {
    addnew () {
      // used to quickly add projects via code
      // db.collection("projects").doc('Weather App').set(
      // {
      //   name: 'Weather App',
      //   pic: 'weather.jpg',
      //   position: 12,
      //   featured: true,
      //   description: 'Local weather: displays the weather in the fom of an old time telegram. Must be allowed to get location in order to work.',
      //   urls: {
      //     codepen: 'https://codepen.io/marianissimus/full/MvjdNr/'
      //   },
      //   tags: ['jQuery', 'CSS', 'JavaScript']
      // }
      // )
      // .then(function() {
      //   console.log("Document successfully written!")
      // })
      // .catch(function(error) {
      //   console.error("Error writing document: ", error)
      // })
      // this.projects = this.getDbProjects()
    },
    getEmails () {
      db.collection("contactforms")
      .get()
      .then((querySnapshot) => {
        const emails = []
        querySnapshot.forEach(doc => {
          emails.push(doc.data())
        })
        this.contactForms = emails
      })
      .catch(error => console.log("Error getting document:", error) )
    },
    saveProject () {
      for (var key in this.editing.urls) {
        if (this.editing.urls[key] === '' || !this.editing.urls[key]) {
          delete this.editing.urls[key]
        }
      }
      if (this.isEditingExisting) {
        db.collection("projects").doc(this.editing.name).update(this.editing)
        .then(function() {
          console.log("Document successfully updated!")
        })
        .catch(function(error) {
          console.error("Error writing document: ", error)
        })
      } else {
        db.collection("projects").doc(this.editing.name).add(this.editing)
        .then(function() {
          console.log("Document successfully added!")
        })
        .catch(function(error) {
          console.error("Error writing document: ", error)
        })
         this.editing = this.getEmptyProject()
         this.isEditingExisting = false
      }
    },
    cancel () {
      this.editing = this.getEmptyProject()
    },
    getEmptyProject () {
      this.isEditingExisting = false
      return {
        name: null,
        urls: {
          github: null,
          browser: null,
          codepen: null
        },
        tags: [],
        description: null,
        featured: false,
        position: null
      }
    },
    edit(project) {
      this.isEditingExisting = true
      this.editing = project
    },
    getProjectsLength () {
      return this.projects.length
    },
    remove (project) {
      db.collection('projects').doc(project).delete().then(function() {
          console.log("Document successfully deleted!")
      }).catch(function(error) {
          console.error("Error removing document: ", error)
      })
    },
    deleteEmail (date) {
      db.collection('contactforms').doc(date).delete().then(() => {
          console.log("Document successfully deleted!")
          this.getEmails()
      }).catch(function(error) {
          console.error("Error removing document: ", error)
      })
    },
    logOut () {
      firebase.auth().signOut().catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
        if (errorMessage) console.log(`Error code: ${errorCode} with message: ${errorMessage}`)
      })
      .then (()=> {
        mutations.setIsUserLoggedIn(false)
        this.$router.replace('/')
      })
    }
  }
}
</script>

<style lang="scss">
  .projects-editor {
    margin: 0 auto;
    width: 90vw;
  }

  .projects-list {
    margin-left: 30px;
  }

  .edit-content {
    width: 100%;
    display: flex;
  }

  .form-row label, .form-row input, .form-row textarea, .form-row checkbox {
    font-size: 1.3em;
  }

  #featured {
    height: 30px;
    width: 30px;
  }

  .form-row input, .form-row textarea {
    width: 300px;
  }

  .email-row {
    width: 90%;
    padding: 1em;
    font-size: 1em;
    & p {
      margin: 10px 0;
    }
  }

  .edit-buttons {
    font-size: .8em;
    margin: 1em 5px;
    padding: 10px;
    background-color: rgba(1, 1, 1, .5);
    color: white;
    font-size: 1.3em;
  }


</style>