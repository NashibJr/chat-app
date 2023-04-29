import React from "react";
import Links from "../components/links";
import "../styles/chats.css";
import UserChats from "../components/userChats";

const Chats = () => {
  return (
    <div className="home-content">
      <div>
        <Links />
      </div>
      <UserChats />
    </div>
  );
};

export default Chats;
