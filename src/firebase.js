// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCo4ymjFBAAG0D-B8WlXQ6M4EPZLRWvgcg",
    authDomain: "c-81b31.firebaseapp.com",
    projectId: "c-81b31",
    storageBucket: "c-81b31.appspot.com",
    messagingSenderId: "858961947728",
    appId: "1:858961947728:web:44cd8fea72c01314953555",
    measurementId: "G-L4WP1C9455"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = firebaseApp.auth();

export { db, auth };