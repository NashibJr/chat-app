import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/links.css";
import chats from "../images/chat.png";
import logout from "../images/logout.png";
import newchat from "../images/newchat.jpg";

const Links = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current.style.height = `${window.innerHeight - 129}px`;
  }, [ref]);
  const style = {
    textDecoration: "none",
    color: "#fff",
    marginLeft: "7vh",
  };
  return (
    <div className="links-content">
      <h2>Marcus Rashford</h2>
      <div>
        <ul ref={ref}>
          <span>
            <li>
              <img src={chats} width="25px" height="25px" alt="" />
              <Link to="/chats" style={style}>
                Chats
              </Link>
            </li>
            <li>
              <img src={newchat} width="25px" height="25px" alt="" />
              <Link to="/newchats" style={style}>
                New Chats
              </Link>
            </li>
          </span>
          <li>
            <img src={logout} width="25px" height="25px" alt="" />
            <Link to="/" style={style}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
