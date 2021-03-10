import *as firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyCVrdarAKFeb9hHidO0Oj0xwLBaz3ptHB4",
    authDomain: "wireless-library-90c36.firebaseapp.com",
    projectId: "wireless-library-90c36",
    storageBucket: "wireless-library-90c36.appspot.com",
    messagingSenderId: "475465099910",
    appId: "1:475465099910:web:b892d09f4574cb9c99bf07"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();