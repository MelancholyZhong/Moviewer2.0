import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/UserForm.css";

const Signup = () => {
  //const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const data = {
    fname: fname,
    lname: lname,
    email: email,
    password: password,
  };
  // where to use UseEffect

  const submitHandler = async (e) => {
    // Prevent page from re-rendering
    e.preventDefault();
    console.log(data);
    // console.log(lname);
    // console.log(email);
    // console.log(password);
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
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
      } else {
        setError("An error occurred");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // should handlesubmit go on button?
  return (
    <div className="fullscreen">
      <form onSubmit={submitHandler} className="form">
        <div className="login-screen">
          <h1 className="login-title">Sign Up</h1>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="input-group">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              name="fname"
              id="fname"
              required={true}
              onChange={(e) => setFname(e.target.value)}
              value={fname}
            />
          </div>
          <div className="input-group">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              name="lname"
              id="lname"
              required={true}
              onChange={(e) => setLname(e.target.value)}
              value={lname}
            />
          </div>
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
              Sign Up
            </button>
            <Link to="/login"> Have an account? </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Signup;
