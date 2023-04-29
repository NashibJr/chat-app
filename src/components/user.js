import React from "react";
import { useDispatch } from "react-redux";
import { handleChats } from "../redux/users/usersSlice";
import "../styles/newchats.css";

const User = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div className="user-content">
      <p>{user.username}</p>
      <button
        type="button"
        onClick={() => {
          const { id, username } = user;
          dispatch(handleChats({ id, username }));
        }}
      >
        Chat
      </button>
    </div>
  );
};

export default User;
