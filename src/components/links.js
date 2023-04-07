import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/links.css";
import chats from "../images/chat.png";
import logout from "../images/logout.png";
import newchat from "../images/newchat.jpg";
import home from "../images/home.png";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../redux/users/usersSlice";

const Links = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.users._loggedInUser);
  const navigate = useNavigate();

  useEffect(() => {
    ref.current.style.height = `${window.innerHeight - 193}px`;
  }, [ref]);

  const style = {
    textDecoration: "none",
    color: "#fff",
    marginLeft: "7vh",
    cursor: "pointer",
  };
  return (
    <div className="links-content">
      <h1>
        <em>yeChat</em>
      </h1>
      <h2></h2>
      <div>
        <ul ref={ref}>
          <span>
            <li>
              <img src={home} width="25px" height="25px" alt="" />
              <div
                style={style}
                onClick={() => navigate(`/home/${loggedInUser.id}`)}
              >
                Home
              </div>
            </li>
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
          <li onClick={() => dispatch(handleLogout())}>
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
