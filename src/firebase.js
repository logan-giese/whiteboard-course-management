// Import Firebase dependencies
import firebase from "firebase/app";
//import "firebase/auth";
//import "firebase/firestore";

// Firebase configuration (required to connect)
const firebaseConfig = {
  apiKey: "AIzaSyDwpAGRWo_GikLeCdhRPbxJBm1g-uwIq_M",
  authDomain: "whiteboard-course-management.firebaseapp.com",
  projectId: "whiteboard-course-management",
  storageBucket: "whiteboard-course-management.appspot.com",
  messagingSenderId: "215690108847",
  appId: "1:215690108847:web:bcfbccc0fd574d4c05195a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
