import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAiommytbe9VZjMRgymoYxqLcdxQj9Tx_E',
  authDomain: 'clone-a82ca.firebaseapp.com',
  projectId: 'clone-a82ca',
  storageBucket: 'clone-a82ca.appspot.com',
  messagingSenderId: '667026698710',
  appId: '1:667026698710:web:95352b4ffb081d8d11b477',
  measurementId: 'G-H8P13D7672',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
