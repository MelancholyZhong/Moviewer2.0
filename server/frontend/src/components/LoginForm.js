import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
import "../styles/UserForm.css";
import { MovieContext } from "../context/context";
//import LoginForm from "../components/LoginForm";

const Login = () => {
  //const { isLoggedIn, setIsLoggedIn } = useContext(MovieContext);
  const { setIsLoggedIn, setUserId } = useContext(MovieContext);
  //const navigate = useNavigate();
  // Delcare states needed to store input values: email, password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const data = {
    email: email,
    password: password,
  };

  // when form is submitted, calls submitHandler where posts data to REST API
  const submitHandler = async (e) => {
    console.log(data);
    //console.log(password);
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
      // Getting response data from backend
      //let resJson = await redirect.json();
      // get status value as response from backend.  status 200 means success
      const res = await userData.json();
  
      console.log("//", JSON.stringify(res.isLoggedIn));
      if (res.isLoggedIn) {
        setUserId(email);
        setEmail("");
        setPassword("");
        setIsLoggedIn(true);
        // want to show alert
        //setMessage(res.message);
        //console.log(message);
        navigate("/dashboard");
      } else {
        console.log("not ok");
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
