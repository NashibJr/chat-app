import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../components/dummy";

const initialState = {
  users: users,
  _loggedInUser: {},
  error: null,
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      const { email, password } = action.payload;
      const loggedInUser = state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (loggedInUser) {
        state._loggedInUser = loggedInUser;
        state.error = "";
      } else {
        state.error = "Invalid username or password!";
      }
    },
    handleLoggedinUser: (state, action) => {
      const id = action.payload;
      const users = state.users.filter((user) => user.id !== id);
      state.users = users;
    },
    handleChats: (state, action) => {
      const { username } = action.payload;
      const user = state.users.find((user) => user.username.includes(username));
      const isPresent = state._loggedInUser.friends.find((friend) =>
        friend.username.includes(username)
      );
      if (isPresent) {
        console.log(`${user} is already in your chats.`);
      } else {
        if (user.username !== "") {
          state._loggedInUser.friends.push(user);
        }
      }
    },
    handleLogout: (state, action) => {
      state.error = null;
      if (!state.users.includes(state._loggedInUser)) {
        state.users.push(state._loggedInUser);
      }
      state._loggedInUser = {};
    },
  },
});

export const { handleLogin, handleLoggedinUser, handleChats, handleLogout } =
  usersSlice.actions;

export default usersSlice;
