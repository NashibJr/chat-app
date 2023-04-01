import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Links from "../components/links";
import User from "../components/user";
import "../styles/newchats.css";

const Newchats = () => {
  const users = useSelector((state) => state.users.users).map((user) => (
    <User user={user} key={user.id} />
  ));
  const ref = useRef();
  const [userName, setUserName] = useState("");
  useEffect(() => {
    ref.current.style.height = `${window.innerHeight - 40}px`;
  }, [ref]);
  return (
    <div className="newchats-content">
      <div className="user-links" ref={ref}>
        <Links />
      </div>
      <div className="new-chats">
        <div className="new-chats-first-child">
          <h2>Add new chats</h2>
          <div className="users-content">{users}</div>
        </div>
        <div className="user-search">
          <p>Search</p>
          <form>
            <input
              type="text"
              value={userName}
              placeholder="Search for user"
              onChange={(event) => setUserName(event.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newchats;
