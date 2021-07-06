import firebase from 'firebase';
import "firebase/firestore";

  // Web app's Firebase configuration
  var firebaseConfig = {
    
    apiKey: "AIzaSyDwpAGRWo_GikLeCdhRPbxJBm1g-uwIq_M",
    authDomain: "whiteboard-course-management.firebaseapp.com",
    projectId: "whiteboard-course-management",
    storageBucket: "whiteboard-course-management.appspot.com",
    messagingSenderId: "215690108847",
    appId: "1:215690108847:web:bcfbccc0fd574d4c05195a"
    
  };



  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
 