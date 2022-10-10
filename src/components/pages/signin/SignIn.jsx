import React from "react";
import "./signin.css";

export default function SignIn() {
  return (
    <div className="signin">
      <div className="signin-container">
        <h2 className="title">Sign In</h2>

        <label for="fusername">Username </label>
        <input className="form" type="text" id="fusername" name="fusername" />
        <br />
        <label for="fpassword">Password </label>
        <input
          className="form"
          type="password"
          id="fpassword"
          name="fpassword"
        />
        <br />
        <a href="pocket-tour-app/homepage" className="button">
          Sign In
        </a>
        <p className="redirect">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
