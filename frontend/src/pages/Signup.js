import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/UserForm.css";

const Signup = () => {
  //const navigate = useNavigate();
  //const [user, setUser] = useState({ username: "", email: "" });
  const [credentials, setCredentials] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  //const [error, setError] = useState("");

  const submitHandler = (e) => {
    // Don't want page to re-render
    e.preventDefault();
    let login_cred = {
      fname: credentials.fname,
      lname: credentials.lname,
      email: credentials.email,
      password: credentials.password,
    };

    console.log(login_cred);
    // if (
    //   login_cred.email === adminUser.email &&
    //   login_cred.password === adminUser.password
    // ) {
    //   console.log("Logged in");
    //   // setUser
    //   // setUser({
    //   //   username: credentials.username,
    //   //   email: credentials.email,
    //   // });
    //   navigate("/");
    // } else {
    //   console.log("Details do not match");
    //   setError("Details do not match");
    // }
  };
  //{error !== "" ? <div className="error">{error}</div> : ""}
  return (
    <div className="fullscreen">
      <form onSubmit={submitHandler} className="form">
        <div className="login-screen">
          <h1 className="login-title">Sign Up</h1>

          <div className="input-group">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              name="fname"
              id="fname"
              required={true}
              onChange={(e) =>
                setCredentials({ ...credentials, fname: e.target.value })
              }
              value={credentials.fname}
            />
          </div>
          <div className="input-group">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              name="lname"
              id="lname"
              required={true}
              onChange={(e) =>
                setCredentials({ ...credentials, lname: e.target.value })
              }
              value={credentials.lname}
            />
          </div>
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
              Sign Up
            </button>
            <Link to="/login"> Have an account? </Link>
          </div>
          {/* <button type="submit" className="loginButton">
              Login
            </button> */}
        </div>
      </form>
    </div>
  );
};
export default Signup;
