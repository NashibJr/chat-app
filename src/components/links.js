import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/links.css";
import home from "../images/home.png";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../redux/users/usersSlice";
import Lists from "./lists";
import { listValues } from "./dummy";

const style = {
  textDecoration: "none",
  color: "#fff",
  marginLeft: "7vh",
  cursor: "pointer",
};

const styles = {
  padding: "0",
  marginTop: "10px",
  marginBottom: "-4vh",
  display: "flex",
  width: "200px",
  flexWrap: "wrap",
  marginRight: "20px",
};

const Links = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.users._loggedInUser);
  const navigate = useNavigate();
  const profileName = loggedInUser.username;

  const handleLogOut = () => {
    dispatch(handleLogout());
  };

  const handleNavigate = () => {
    navigate(`/home/${loggedInUser.id}`);
  };

  useEffect(() => {
    ref.current.style.height = `${window.innerHeight - 193}px`;
  }, [ref]);
  return (
    <div className="links-content">
      <h1 style={{ display: "flex", flexWrap: "wrap", width: "200px" }}>
        <em>yeChat</em>
      </h1>
      <p style={styles}>
        <strong>Loggedin as: </strong>
        {profileName}
      </p>
      <h2>{""}</h2>
      <div>
        <ul ref={ref}>
          <span>
            <li>
              <img src={home} width="25px" height="25px" alt="" />
              <div style={style} onClick={handleNavigate}>
                Home
              </div>
            </li>{" "}
          </span>
          <span>
            {listValues.map((listValue, index) => (
              <Lists
                values={listValue}
                key={index}
                index={index}
                handleLogOut={handleLogOut}
              />
            ))}
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Links;
