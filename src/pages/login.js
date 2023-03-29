import React from "react";
import loginIcon from "../images/loginicon.png";

const Login = () => {
  return (
    <div>
      <img src={loginIcon} width="10%" height="10%" alt="" />
      <form>
        <label>
          <img src="C:\Users\Faith\Desktop\weather-app\src\images/email.png" />
        </label>
        <input type="email" name="email" value="" placeholder="Email" />
        <label>
          <img src="C:\Users\Faith\Desktop\weather-app\src\images/password.png" />
        </label>
        <input
          type="password"
          name="password"
          value=""
          placeholder="Password"
        />
        <button type="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
