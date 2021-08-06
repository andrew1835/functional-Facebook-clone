import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC1HqKWAHRrNv5CkBEXRyZyfICAWwJfjAc",
    authDomain: "functional-facebook-clone.firebaseapp.com",
    projectId: "functional-facebook-clone",
    storageBucket: "functional-facebook-clone.appspot.com",
    messagingSenderId: "615890263777",
    appId: "1:615890263777:web:dd882d3df5d8a52e7de1a0"
};


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()


const db = app.firestore()
const storage = firebase.storage()
const auth = app.auth()


export { auth, db, storage }