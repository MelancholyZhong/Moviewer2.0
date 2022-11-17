import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/UserForm.css";
//import LoginForm from "../components/LoginForm";

const Login = () => {
  //const navigate = useNavigate();
  // Delcare states needed to store input values: email, password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      let res = await fetch("https://localhost3001", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // Getting response data from backend
      //let resJson = await redirect.json();
      // get status value as response from backend.  status 200 means success
      if (res.status === 200) {
        setEmail("");
        setPassword("");
      } else {
        setError("Username and password do not match");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // should the onsubmitHandler go on form? or should it be action
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
