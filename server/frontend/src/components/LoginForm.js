// Aaron Leung
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/UserForm.css";
import { MovieContext } from "../context/context";

const Login = () => {
  const { setIsLoggedIn, setUserId } = useContext(MovieContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const data = {
    email: email,
    password: password,
  };

  // When form is submitted, calls submitHandler where posts data to REST API
  const submitHandler = async (e) => {
    console.log(data);
    // Prevent page from re-rendering
    e.preventDefault();
    try {
      let userData = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("userData1", userData);
      const res = await userData.json();
<<<<<<< HEAD
      // if user is logged in
=======

      console.log("//", JSON.stringify(res.isLoggedIn));
>>>>>>> 15e27ed8de6b707f323b613fc63be7b8843359a0
      if (res.isLoggedIn) {
        setUserId(email);
        setEmail("");
        setPassword("");
        setIsLoggedIn(true);
<<<<<<< HEAD
        navigate("/dashboard");
=======
        navigate(`/dashboard/${email}`);
>>>>>>> 15e27ed8de6b707f323b613fc63be7b8843359a0
      } else {
        setError(res.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fullscreen">
      <form onSubmit={submitHandler} className="form">
        <div className="login-screen">
          <h1 className="login-title">Login</h1>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="loginButton">
            <button
              type="submit"
              className="btn btn-primary btn-rounded btn-block"
            >
              Sign In
            </button>
            <Link to="/signup"> Sign Up </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
