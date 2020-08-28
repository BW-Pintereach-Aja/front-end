import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

import { useHistory } from "react-router-dom";

import "./SignUp.scss";

const initialForm = {
          firstName: "",
          lastName: "",
          username: "",
          password: "",
          confirmpassword: "",
          terms: true,
        }

export default function SignUp() {
  const history = useHistory();

  const [formState, setFormState] = useState(initialForm);

  const [serverError, setServerError] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [errors, setErrors] = useState(initialForm);

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.name === "terms" ? e.target.checked : e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err);

        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    axios
      .post("https://bw-pintereach-aja.herokuapp.com/api/auth/register", formState)
      .then((res) => {
        console.log("success!", res.data);
        // setPost(res.data);
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("userID", res.data.id);
        history.push("/articles/");
        setServerError(null);
        setFormState(initialForm);
      })
      .catch((err) => {
        setServerError("oops! something happened!");
      });
  };

  const inputChange = (e) => {
    e.persist();
    console.log("input changed!", e.target.value);
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    validateChange(e);
    setFormState(newFormData);
  };

  const formSchema = yup.object().shape({
    firstName: yup.string().required("Name is a required field"),
    lastName: yup.string().required("Name is a required field"),
    username: yup.string().required("Must include a username"),
    password: yup
      .string()
      .required("Please create a password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Password does not meet criteria."
      ),
    confirmpassword: yup
    .string()
    .required("Please confirm password")
    .oneOf([yup.ref('password'), null], 'Passwords must match'
    ),
    terms: yup.boolean().oneOf([true], "Please agree to Terms & Conditions"),
  });

  useEffect(() => {
    formSchema.isValid(formState).then((isValid) => {
      setButtonDisabled(!isValid);
    });
  }, [formState]);

  return (
    <form  className="signup-form" id="signup-container" onSubmit={formSubmit}>
      {serverError ? <p className="error">{serverError}</p> : null}
    
    <h1 className="welcometitle">Welcome to Pintereach!</h1>
    <h3 className="welcometitle">Please register for an account.</h3>
      <label htmlFor="firstName">
        First Name
        <input
          className="signup-input"
          id="firstName"
          type="text"
          name="firstName"
          value={formState.firstName}
          onChange={inputChange}
        />
        {errors.firstName.length > 0 ? (
          <p className="error">{errors.firstName}</p>
        ) : null}
      </label>
      <label  htmlFor="lastName">
        Last Name
        <input
          className="signup-input"
          id="lastName"
          type="text"
          name="lastName"
          value={formState.lastName}
          onChange={inputChange}
        />
        {errors.lastName.length > 0 ? (
          <p className="error">{errors.lastName}</p>
        ) : null}
      </label>
      <label htmlFor="username">
        Username
        <input
          className="signup-input"
          id="username"
          type="text"
          name="username"
          value={formState.username}
          onChange={inputChange}
        />
        {errors.username.length > 0 ? (
          <p className="error">{errors.username}</p>
        ) : null}
      </label>

      <label htmlFor="password">
        Password:
        <input
          className="signup-input"
          type="password"
          id="password"
          name="password"
          value={formState.password}
          onChange={inputChange}
        />
        {errors.password.length > 0 ? (
          <p className="error">{errors.password}</p>
        ) : null}
      </label>
      <label htmlFor="confirmpassword">
        Confirm Password:
        <input
          className="signup-input"
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          value={formState.confirmpassword}
          onChange={inputChange}
        />
        {errors.confirmpassword.length > 0 ? (
          <p className="error">{errors.confirmpassword}</p>
        ) : null}
      </label>
      <label htmlFor="terms" className="terms">
        <input
          className="signup-input"
          type="checkbox"
          id="terms"
          name="terms"
          checked={formState.terms}
          onChange={inputChange}
        />
        Terms & Conditions
        {errors.terms.length > 0 ? (
          <p className="error">{errors.terms}</p>
        ) : null}
      </label>
      <button className="signup-btn"
        disabled={buttonDisabled}
        type="submit"
        onClick={(e) => formSubmit(e)}
      >
        Create Account
      </button>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </form>
  );
}
