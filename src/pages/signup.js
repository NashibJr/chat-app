import React, { useState } from "react";
import { Link } from "react-router-dom";
import email from "../images/email.png";
import password from "../images/password.png";
import usernameImage from "../images/username.jpg";
import "../styles/login.css";

const Signup = () => {
  const [state, setState] = useState({ username: "", email: "", password: "" });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  return (
    <div className="login-content">
      <div>
        <em>
          <h1> Signup for heyApp</h1>
        </em>
      </div>
      <form>
        <label>
          <img src={usernameImage} width="30px" height="30px" alt="" />
          <input
            type="text"
            name="username"
            value={state.username}
            placeholder="Username"
            onChange={handleChange}
          />
        </label>
        <label>
          <img src={email} width="30px" height="30px" alt="" />
          <input
            type="email"
            name="email"
            value={state.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </label>
        <label>
          <img src={password} width="30px" height="30px" alt="" />
          <input
            type="password"
            name="password"
            value={state.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </label>
        <button type="button">Signup</button>
        <p>
          Have an account?{" "}
          <Link to="/">
            <span>Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
