import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAzY6LwcpDpv-iAedD8YlVZWpe_s_r6R4o",
  authDomain: "recette-box-aurel.firebaseapp.com",
  databaseURL: "https://recette-box-aurel.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
