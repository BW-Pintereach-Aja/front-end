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
        console.log(res.data);
        window.localStorage.setItem("token", res.data.token);
        history.push("/articles/");
        window.location.reload(true);
      })
      .catch((err) => console.error("Could not sign in: ", err.message));
  };

  return (
    <>
      <h2>Welcome Back to Pintereach</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
        Username:
        <input
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
          type="password"
          name="password"
          value={signIn.password}
          placeholder="Password..."
          onChange={handleChange}
        />
        </label>
        <button>Sign In</button>
      </form>
    </>
  );
};

export default SignIn;
