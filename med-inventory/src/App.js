import React, { Component } from 'react';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import MainLayout from './layout/MainLayout';
import SignIn from './pages/SignIn';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    return (
      <div>
        {user ? (
          <div>
            <MainLayout user={user} signOut={signOut} />
          </div>
        ) : (
          <div className="signin-container">
            <SignIn signInWithGoogle={signInWithGoogle} />
          </div>
        )}
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
