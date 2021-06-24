import React, {useState, useEffect} from 'react';
import fire from './fire';
import './LoginDetails.css';

const LoginDetails = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }


    const handleLogin = () => {
        clearErrors();
        fire
                .auth()
                .signInWithEmailAndPassword(email,password)
                .catch((err)=> {
                    switch(err.code) {
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
        .createUserWithEmailAndPassword(email,password)
        .catch((err)=> {
            switch(err.code) {
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


    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                clearInputs();
                setUser(user);
            }else{
                setUser("");
            }
        });
    };

    useEffect(()=> {
        authListener();
    },[]);


    return (
        // <div>
        //     <Login 
        //         email={email}
        //         setEmail={setEmail}
        //         password={password}
        //         setPassword={setPassword}
        //         handleLogin={handleLogin}
        //         handleSignUp={handleSignUp}
        //         hasAccount={hasAccount}
        //         setHasAccount={setHasAccount}
        //         emailError={emailError}
        //         passwordError={passwordError}
        //     />
        // </div>

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
              <button className="loginBtn" onClick={handleLogin}> Sign In </button>
              <p>
                Don't have an Admin access ?
                <span onClick={() => setHasAccount(!hasAccount)}>
                  Request for admin Access
                </span>
              </p>
            </>
          ) : (
            <>
              <button className="loginBtn" onClick={handleSignUp}> Apply For Admin Access </button>
              <p>
                Are you admin
                <span onClick={() => setHasAccount(!hasAccount)}>
                  Sign In
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
    );
};

export default LoginDetails;