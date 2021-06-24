import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDwRwZ2jbLNw8DI3rp-3czC711A3Y7jZFs",
    authDomain: "techex-portal.firebaseapp.com",
    projectId: "techex-portal",
    storageBucket: "techex-portal.appspot.com",
    messagingSenderId: "487939428373",
    appId: "1:487939428373:web:42e891bd430f80e23efe1c"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;