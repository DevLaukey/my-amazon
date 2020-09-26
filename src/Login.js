import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signIn = e => {
    e.preventDefault();
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(error => alert(error.message));
  };

  const register = e => {
    e.preventDefault();

    // firebase login
    // firebase login
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://149448277.v2.pressablecdn.com/wp-content/uploads/2018/06/Victor-Logo.png"
          alt="victor"
        />
      </Link>
      <div className="login__container">
        <h1 className="login__container_header">Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
        </form>

        <p>Welcome Kindly Login and Enjoy</p>
        <p>This is an Amazon Clone</p>
        <p>Powered By React</p>

        <button
          className="login__registerButton"
          onClick={register}
          type="submit"
        >
          Create an Account
        </button>
      </div>
    </div>
  );
}

export default Login;
