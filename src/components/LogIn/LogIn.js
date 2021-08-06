import React, { useContext, useState } from 'react';
import './LogIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const LogIn = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: '',
        error: '',
        success: false,

    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {

                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, photo: photoURL };
                setLoggedInUser(signedInUser);
                history.replace(from);

            })
            .catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });

    }

    const handleBlur = (e) => {

        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
            console.log(isFieldValid);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = passwordHasNumber && isPasswordValid;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    }

    const handleSubmit = (e) => {
        // console.log(user.email && user.password);
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    // console.log('sign in user info', res.user);
                    const { displayName, email } = res.user;
                    const signedInUser = { name: displayName, email };
                    setLoggedInUser(signedInUser);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });

        }
        e.preventDefault();
    }

    const updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        }).then(function () {
            console.log('User name Updated Successfully');
            // Update successful.
        }).catch(function (error) {
            console.log(error);
            // An error happened.
        });
    }
    return (
        <div >
            <div className="login">
                <h2>illusion photography</h2> 

                <form onSubmit={handleSubmit}>
                    <div className="login-input-field">
                        {newUser && <input onBlur={handleBlur} type="text" name="name" placeholder="Enter Your Name" required />}

                    </div>
                    <div className="login-input-field">
                        <input type="text" onBlur={handleBlur} name="email" placeholder="Enter Email Address" required />

                    </div>
                    <div className="login-input-field">
                        <input type="password" onBlur={handleBlur} name="password" placeholder="Enter Password" required />
                    </div>

                    <div className="button">
                        <input type="submit" value={newUser ? 'Sign Up' : 'Log In'} />
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                    <label className="ml-2" htmlFor="newUser"><strong> New User Sign Up</strong></label>
                </div>
                <hr />
                <div>
                    <h6 className="or" style={{ textAlign: "center" }}>OR</h6>
                    <div>
                        <button onClick={handleGoogleSignIn} className="anotherLoginBtn forClr1"> <FontAwesomeIcon style={{ fontSize: "25px" }} className="mr-5" icon={faGooglePlus} />Continue With Google</button>

                        <button className="anotherLoginBtn forClr2 mt-3"><FontAwesomeIcon style={{ fontSize: "25px" }} className="mr-5" icon={faFacebook} />Continue With Facebook</button>
                    </div>

                </div>
                <div>
                    <p style={{ color: 'red' }}><strong>{user.error}</strong></p>
                    {user.success && <p style={{ color: "green" }}><strong>User  {newUser ? 'Created' : 'Logged In'}  Successfully</strong></p>}
                </div>
            </div>


        </div>
    );
};

export default LogIn;