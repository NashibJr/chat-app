import React, { useState } from "react";
import { Link } from "react-router-dom";
import email from "../images/email.png";
import password from "../images/password.png";
import "../styles/login.css";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  return (
    <div className="login-content">
      <div>
        <em>
          <h1>heyApp</h1>
        </em>
      </div>
      <form>
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
        <button type="button">Login</button>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
