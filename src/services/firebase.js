import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Firebase configuration for the project
const firebaseConfig = {
  apiKey: "AIzaSyDwpAGRWo_GikLeCdhRPbxJBm1g-uwIq_M",
  authDomain: "whiteboard-course-management.firebaseapp.com",
  projectId: "whiteboard-course-management",
  storageBucket: "whiteboard-course-management.appspot.com",
  messagingSenderId: "215690108847",
  appId: "1:215690108847:web:bcfbccc0fd574d4c05195a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
