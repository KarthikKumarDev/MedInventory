import React from "react";
import "./SignIn.css";
import Button from "@material-ui/core/Button";

export default function SignIn(props) {
  const { signInWithGoogle } = props;

  return (
    <div className="signin-card">
      <h3>Welcome to KK Sidha Clinic</h3>
      <Button
        variant="contained"
        color="primary"
        onClick={signInWithGoogle}
        className="form-button"
      >
        Sign in using Google
      </Button>
    </div>
  );
}
