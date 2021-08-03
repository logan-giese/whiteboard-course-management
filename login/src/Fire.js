import firebase from 'firebase';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB1qWcH4VWELWY0AOqKeS712p_HNKWqpjc",
    authDomain: "login-5b589.firebaseapp.com",
    projectId: "login-5b589",
    storageBucket: "login-5b589.appspot.com",
    messagingSenderId: "795553293946",
    appId: "1:795553293946:web:9f38627356546e65763dc3"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;