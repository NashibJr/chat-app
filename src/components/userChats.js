import React from "react";
import { useSelector } from "react-redux";
import "../styles/userchats.css";
import Search from "./search";

const UserChats = () => {
  const friends = useSelector((state) => state.users._loggedInUser.friends);
  return (
    <div className="user-chats">
      <div className="chats-display">
        <h2>Chats</h2>
        <Search friends={friends} />
      </div>
      <div className="messages-content">Messages</div>
    </div>
  );
};

export default UserChats;
