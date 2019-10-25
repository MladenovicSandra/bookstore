import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBR23nGJ7l1cVYHkLL6ZFRu8gIRiQsl2AU",
    authDomain: "sandra-bookstore.firebaseapp.com",
    databaseURL: "https://sandra-bookstore.firebaseio.com",
    projectId: "sandra-bookstore",
    storageBucket: "",
    messagingSenderId: "745080327563",
    appId: "1:745080327563:web:dac608bc10c6fdbf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({ timestampsInSnapshots: true })


  export default firebase