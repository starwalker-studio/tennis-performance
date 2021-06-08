import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDpFgjM0gdAkcpNBy2cKVzjLNtWofIgU74",
    authDomain: "tennis-performance.firebaseapp.com",
    projectId: "tennis-performance",
    storageBucket: "tennis-performance.appspot.com",
    messagingSenderId: "621043320332",
    appId: "1:621043320332:web:aeed78c1afbac111b0d029",
    measurementId: "G-RE9N8YE0PT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage };