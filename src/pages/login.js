import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import email from "../images/email.png";
import password from "../images/password.png";
import { handleLogin } from "../redux/users/usersSlice";
import "../styles/login.css";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.users);
  const navigate = useNavigate();
  const onSave = Boolean(state.email) && Boolean(state.password);

  useEffect(() => {
    if (userState.error === "") {
      navigate(`/home/${userState._loggedInUser.id}`);
    }
  }, [userState.error, navigate, userState._loggedInUser.id]);

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
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            dispatch(
              handleLogin({
                email: state.email,
                password: state.password,
              })
            );
          }}
          disabled={!onSave}
        >
          Login
        </button>
        <span>{userState.error}</span>
        <p>
          Don't have an account?{" "}
          <Link to="/signup">
            <span>Signup</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
