import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDw-uPZq-i5chDX2QQTXA-OCMUXfDmbPAo',
  authDomain: 'ninja-firegram-520b5.firebaseapp.com',
  databaseURL: 'https://ninja-firegram-520b5.firebaseio.com',
  projectId: 'ninja-firegram-520b5',
  storageBucket: 'ninja-firegram-520b5.appspot.com',
  messagingSenderId: '318231449184',
  appId: '1:318231449184:web:c08ff768f2d91455f8fd05',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
