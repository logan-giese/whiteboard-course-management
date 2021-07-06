import React, {useEffect, useState} from 'react';
import fire from "./services/firebase";
import Login from"./Login"
import Dashboard from './Dashboard'
import './App.css';

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(true);
  const [loading, setLoading] = useState(false);

  
  
  const clearInputs = () =>{
    setEmail('');
    setPassword('');
    setConfirmPassword('')
  }
  const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('')
  }
const handleLogin = () =>{
  setLoading(true)
  clearErrors();
  fire
  .auth()
  .signInWithEmailAndPassword(email, password).then((user)=>{
    setLoading(false)
    setUser(user)
    clearInputs()
  })
  .catch(err =>{
    setLoading(false)
    switch(err.code){
      case "auth/invalid-email":
      case "auth/user-disabled":
      case "auth/user-not-found":
      setEmailError(err.message);
      break;
      case "auth/wrong-password":
        setPasswordError(err.message);
        break;
    }
  });
  

}

const validateConfirmPassword=(password,confirmPassword )=>{
  if(password==confirmPassword){
    return true
  }
  else{
    setConfirmPasswordError("Password doesn't match")
    return false
  }
}

const handlesignUp = () =>{
  setLoading(true)
  if(!(validateConfirmPassword(password, confirmPassword))){
    setLoading(false)
    return
  }
  clearErrors();
  fire
  .auth()
  .createUserWithEmailAndPassword(email, password).then((user)=>{
    setLoading(false)
    setUser(user)
    clearInputs()
  })
  .catch(err =>{
    setLoading(false)
    switch(err.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
      setEmailError(err.message);
      break;
      case "auth/weak-password":
        setPasswordError(err.message);
        break;
    }
  });
 

}

const resetPassword=(email)=>{
  setLoading(true)
   return fire.auth().sendPasswordResetEmail(email).then(()=>{ 
    clearErrors()
    clearInputs()
    setLoading(false)
  })
}
const handleLogout = ()=>{
  fire.auth().signOut();
};
const authListener = ()=>{
  fire.auth().onAuthStateChanged((user) => {
    if(user){
      clearInputs(); 
   setUser(user);
    }
    else{
      setUser("");
    }
  });
}
useEffect(() => {
  authListener();
},[]);
  return (
    <div className = "App">
      {user ? (
        <Dashboard handleLogout={handleLogout} />
      ) : (
     <Login 
     email = {email} 
     setEmail = {setEmail} 
     password = {password}
     setPassword = {setPassword}
     handleLogin = {handleLogin}
     handlesignUp = {handlesignUp}
     hasAccount = {hasAccount}
     setHasAccount = {setHasAccount}
     emailError = {emailError}
     passwordError = {passwordError}
     confirmPassword={confirmPassword}
     setConfirmPassword={setConfirmPassword}
     confirmPasswordError={confirmPasswordError}
     forgotPassword={forgotPassword}
     setForgotPassword={setForgotPassword}
     resetPassword={resetPassword}
     loading={loading}
     setLoading={setLoading}
     user={user}
     setUser={setUser}
     />
      )}
    </div>
  );
}

export default App;
