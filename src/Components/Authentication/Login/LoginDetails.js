import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../App";
import fire from "./fire";
import "./LoginDetails.css";
import { useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import SideBar from "../../AdminDashboard/SideBar/SideBar";

const LoginDetails = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if(firebase.apps.length === 0){
    firebase.initializeApp(fire);
}

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email} 
        setLoggedInUser(signedInUser);
        storeAuthToken();
        history.replace(from);
        setUserToken();
        
      }).catch(function(error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
}

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password).then(function(result) {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email} 
        setLoggedInUser(signedInUser);
        storeAuthToken();
        history.replace(from);
        setUserToken();
      })
      .catch((err) => {
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

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password).then(function(result) {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email} 
        setLoggedInUser(signedInUser);
        storeAuthToken();
        history.replace(from);
        setUserToken();
      })
      .catch((err) => {
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

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
        sessionStorage.setItem('token', idToken);

    }).catch(function(error) {
        console.log(error);
      });
}


const setUserToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        sessionStorage.setItem('token', idToken);
      }).catch(function(error) {
        console.log(error);
      });
}

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  // const authListener = () => {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       clearInputs();
  //       setUser(user);
  //     } else {
  //       setUser("");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   authListener();
  // }, []);

  return (
    <div>
      <div className="login">
        <div className="loginContainer">
          <label>Username</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button className="loginBtn" onClick={handleLogin}>
                  {" "}
                  Sign In{" "}
                </button>
                <p>
                  Don't have an Admin access ?
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Request for admin Access
                  </span>
                </p>
              </>
            ) : (
              <>
                <button className="loginBtn" onClick={handleSignUp}>
                  {" "}
                  Apply For Admin Access{" "}
                </button>
                <p>
                  Are you admin
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign In
                  </span>
                </p>
              </>
            )}
          </div>
          <button className="loginBtn" onClick={handleGoogleSignIn}>
            
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginDetails;
