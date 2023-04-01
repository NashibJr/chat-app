import React from "react";
import Links from "../components/links";
import "../styles/chats.css";
import noMessage from "../images/nomessages.png";

const Chats = () => {
  return (
    <div className="home-content">
      <div>
        <Links />
      </div>
      <div className="chats-content">
        <h2>
          No Chats just yet. Click the <em>New chat</em> link to start chats
        </h2>
        <img
          src={noMessage}
          width={window.innerWidth / 3}
          height={window.innerHeight / 2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Chats;
