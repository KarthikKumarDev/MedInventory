import React from "react";
import "./SignIn.css";

export default function SignIn(props) {
  const { signInWithGoogle } = props;

  return (
    <div className="signin-card">
      <h3>Welcome to KK Sidha Clinic</h3>
      <button onClick={signInWithGoogle}>Sign in using Google</button>
    </div>
  );
}
