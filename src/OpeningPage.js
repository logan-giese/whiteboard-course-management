import React, { useEffect, useState } from "react";
import firebase from "./services/firebase";
import Login from "./components/Login";
import App from "./App";
import "./App.css";
import UserService from "./services/userService";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./actions";

const OpeningPage = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const person = useSelector(state => state.user);
  const dispatch = useDispatch();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  const handleLogin = () => {
    setLoading(true);
    clearErrors();

    // Sign in with Auth
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userInfo) => {
        // Get user data from Firestore
        UserService.getUserById(userInfo.user.uid).then((userData) => {
          const user = { ...userData, id: userInfo.user.uid };
          setUser(user);
          dispatch(login(user));
          setLoading(false);
          clearInputs();
        });
      })
      
      .catch((err) => {
        setLoading(false);
        switch (err.code) {
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
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password != confirmPassword) {
      setConfirmPasswordError("Password doesn't match");
      return false;
    }
    return true;
  };

  const validateName = (firstName, lastName) => {
    if (firstName.length < 1 || lastName.length < 1) {
      setNameError("Please enter your name");
      return false;
    }
    return true;
  }

  const handleSignUp = () => {
    setLoading(true);
    if (
      !validateConfirmPassword(password, confirmPassword) ||
      !validateName(firstName, lastName)
    ) {
      setLoading(false);
      return;
    }
    clearErrors();

    // Add new user to Auth
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userInfo) => {
        // Add new user to Firestore
        const newUser = {
          first_name: firstName,
          last_name: lastName,
          email: email,
          role: 0,
        };
        UserService.createUser(newUser, userInfo.user.uid).then((id) => {
          const user = { ...newUser, id: id };
          setUser(user);
          dispatch(login(user));
          setLoading(false);
          clearInputs();
        });
      })
      .catch((err) => {
        setLoading(false);
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const resetPassword = (email) => {
    setLoading(true);
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        clearErrors();
        clearInputs();
        setLoading(false);
      });
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    dispatch(logout());
  };

  const authListener = () => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo) {
        clearInputs();
        UserService.getUserById(userInfo.uid).then((userData) => {
          const user = { ...userData, id: userInfo.uid };
          setUser(user);
          dispatch(login(user));
          setPageLoading(false);
        });
      } else {
        setUser(null);
        setPageLoading(false);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div>
      {(() => {
        if (pageLoading) {
          // Loading splash screen
          return (
            <div>
              <h1
                style={{
                  position: "fixed",
                  top: "20px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                LOADING...
              </h1>
            </div>
          );
        } else if (user) {
          // Main app page
          return <App handleLogout={handleLogout} user={user} />;
        } else {
          // Login page
          return (
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
              nameError={nameError}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              confirmPasswordError={confirmPasswordError}
              forgotPassword={forgotPassword}
              setForgotPassword={setForgotPassword}
              resetPassword={resetPassword}
              loading={loading}
            />
          );
        }
      })()}
    </div>
  );
};

export default OpeningPage;
