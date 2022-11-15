import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/UserForm.css";
//import LoginForm from "../components/LoginForm";

const Login = () => {
  const adminUser = {
    email: "test@test.com",
    password: "test123",
  };
  const navigate = useNavigate();
  //const [user, setUser] = useState({ username: "", email: "" });
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    // Don't want page to re-render
    e.preventDefault();
    let login_cred = {
      email: credentials.email,
      password: credentials.password,
    };

    if (
      login_cred.email === adminUser.email &&
      login_cred.password === adminUser.password
    ) {
      console.log("Logged in");
      console.log(login_cred);
      // setUser
      // setUser({
      //   username: credentials.username,
      //   email: credentials.email,
      // });
      navigate("/");
    } else {
      console.log("Details do not match");
      setError("Details do not match");
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
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              value={credentials.email}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              required={true}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              value={credentials.password}
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
          {/* <button type="submit" className="loginButton">
            Login
          </button> */}
        </div>
      </form>
    </div>
  );
};
export default Login;
