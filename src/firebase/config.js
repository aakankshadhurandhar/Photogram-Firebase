import firebase from 'firebase/app';
//authentication module
import 'firebase/auth';

import 'firebase/storage';
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC3GjU2NJIK84eDokePDRio1-zO5luIB8w",
  authDomain: "photogram-35812.firebaseapp.com",
  databaseURL: "https://photogram-35812-default-rtdb.firebaseio.com",
  projectId: "photogram-35812",
  storageBucket: "photogram-35812.appspot.com",
  messagingSenderId: "286383348279",
  appId: "1:286383348279:web:50abb0d5507d99cb00fdb2"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const photoStorage=firebase.storage();
  window.firebase = firebaseApp
  const auth = firebase.auth();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export { db, auth,photoStorage,timestamp,firebase};
 
