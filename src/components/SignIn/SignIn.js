import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./SignIn.scss";

const SignIn = () => {
  const history = useHistory();

  const [signIn, setSingIn] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setSingIn({
      ...signIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://bw-pintereach-aja.herokuapp.com/api/auth/login", signIn)
      .then((res) => {
        console.log("Login: ", res.data);
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("userID", res.data.id);
        history.push("/articles/");
        window.location.reload(true);
      })
      .catch((err) => console.error("Could not sign in: ", err.message));
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="signin-container">
      <h1 className="welcome">Welcome Back to Pintereach</h1>
      <h3 className="signin">Please sign in.</h3>
      
        <label htmlFor="username">
        Username:
        <input
          className="signin-input"
          type="text"
          name="username"
          value={signIn.username}
          placeholder="Username..."
          onChange={handleChange}
        />
        </label>
        <label htmlForm="password">
          Password:
        <input
          className="signin-input"
          type="password"
          name="password"
          value={signIn.password}
          placeholder="Password..."
          onChange={handleChange}
        />
        </label>
        <button className="signin-btn">Sign In</button>
    </div>
    </form>
  );
};

export default SignIn;
