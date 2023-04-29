import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Search = ({ friends }) => {
  const [userName, setUserName] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);
  const navigate = useNavigate();
  const friends_ = useSelector((state) => state.users._loggedInUser.friends);

  const handleSearch = () => {
    if (userName === "") {
      setSearchedUsers(friends_);
    } else {
      const _searchedUsers = friends.filter((friend) =>
        friend.username.includes(userName)
      );
      setSearchedUsers(_searchedUsers);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [userName, handleSearch]);
  return (
    <div className="user-search">
      <form>
        <input
          type="text"
          value={userName}
          placeholder="Search for user"
          onChange={(event) => setUserName(event.target.value)}
          style={{ width: "200%" }}
        />
      </form>
      <div>
        {searchedUsers?.map((user) => (
          <p
            key={user.id}
            style={{
              width: "185%",
              padding: "10px",
              margin: "5px",
              backgroundColor: "#dfdfdf",
              borderRadius: "20px",
              height: "30px",
            }}
            onClick={() => navigate(`/messages/${user.id}`)}
          >
            {user.username}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Search;
