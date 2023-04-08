import React from "react";
import { Link } from "react-router-dom";

const Lists = ({ values: { route, image, label }, handleLogOut, index }) => {
  const style = {
    textDecoration: "none",
    color: "#fff",
    marginLeft: "7vh",
    cursor: "pointer",
  };
  return (
    <li onClick={index === 2 ? handleLogOut : null}>
      <img src={image} width="25px" height="25px" alt="" />
      <Link to={route} style={style}>
        {label}
      </Link>
    </li>
  );
};

export default Lists;
