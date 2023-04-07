import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Links from "../components/links";
import User from "../components/user";
import { handleLoggedinUser } from "../redux/users/usersSlice";
import "../styles/newchats.css";

const Newchats = () => {
  const state = useSelector((state) => state.users);
  const loggedInUser = state._loggedInUser;
  const ref = useRef();
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const [searchedUsers, setSearchedUsers] = useState([]);

  const handleSearch = () => {
    if (userName === "") {
      setSearchedUsers([]);
    } else {
      const _searchedUsers = state.users.filter((user) =>
        user.username.includes(userName)
      );
      setSearchedUsers(_searchedUsers);
    }
  };

  useEffect(() => {
    ref.current.style.height = `${window.innerHeight - 40}px`;
    dispatch(handleLoggedinUser(loggedInUser.id));
    handleSearch();
  }, [ref, dispatch, loggedInUser.id, userName]);

  return (
    <div className="newchats-content">
      <div className="user-links" ref={ref}>
        <Links />
      </div>
      <div className="new-chats">
        <div className="new-chats-first-child">
          <h2>Add new chats</h2>
          <div className="users-content">
            {state.users.map((user) => (
              <User user={user} key={user.id} />
            ))}
          </div>
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
          <div>
            {searchedUsers?.map((user) => (
              <User user={user} key={user.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newchats;
