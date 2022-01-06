import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCr9xG0sDt_jdgqQAsCJpW33CgYksS_hzM",
    authDomain: "fir-9554e.firebaseapp.com",
    projectId: "fir-9554e",
    storageBucket: "fir-9554e.appspot.com",
    messagingSenderId: "353946712534",
    appId: "1:353946712534:web:118f043f7e122fbc360c77",
    measurementId: "G-QYYEWL1D13"
  };

export default firebase.initializeApp(firebaseConfig)