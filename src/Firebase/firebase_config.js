 // Your web app's Firebase configuration

 import firebase from 'firebase';
 import 'firebase/storage';
 import 'firebase/firestore';
 var firebaseConfig = {
    apiKey: "AIzaSyDQ2nET_zPzXAFy8HNZQDWhwm3o7ElUy1A",
    authDomain: "photo-gallery-b1e12.firebaseapp.com",
    projectId: "photo-gallery-b1e12",
    storageBucket: "photo-gallery-b1e12.appspot.com",
    messagingSenderId: "564958560403",
    appId: "1:564958560403:web:5f9144305811f0d281cd66"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage , projectFireStore , timestamp};