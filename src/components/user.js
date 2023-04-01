import React from "react";
import "../styles/newchats.css";

const User = ({ user }) => {
  return (
    <div className="user-content">
      <p>{user.username}</p>
      <button type="button">Chat</button>
    </div>
  );
};

export default User;
