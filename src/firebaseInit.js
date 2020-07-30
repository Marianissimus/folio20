import { firebase } from '@firebase/app'
import '@firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDi6zfL41aedJXE1fz_-bekG9IgBjP5AsU",
  authDomain: "portfolio-5d965.firebaseapp.com",
  databaseURL: "https://portfolio-5d965.firebaseio.com",
  projectId: "portfolio-5d965",
  storageBucket: "portfolio-5d965.appspot.com",
  messagingSenderId: "677055523815",
  appId: "1:677055523815:web:530e1eb7d3c588fc336b42"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// firebase.auth().onAuthStateChanged(user => {
//   console.log('chanded', user);
// });

export const db = firebase.firestore()
export const auth = firebase.auth()

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)