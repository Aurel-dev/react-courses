import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCEqJLeCWvLnMgpmpMN9QBF47MhHt4Vox0",
    authDomain: "chatbox-app-aurel.firebaseapp.com",
    databaseURL: "https://chatbox-app-aurel.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
