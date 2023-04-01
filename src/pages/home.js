import React from "react";
import Links from "../components/links";
import yeChatIcon from "../images/yechat.png";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-content">
      <div>
        <Links />
      </div>
      <div className="home-icon-content">
        <h1>
          <em>Send messages to friends and families with yeChat!!!</em>
        </h1>
        <img
          src={yeChatIcon}
          width={window.innerWidth / 5}
          height={window.innerHeight / 3}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
