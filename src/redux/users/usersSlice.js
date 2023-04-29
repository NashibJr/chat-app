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
      if (state._loggedInUser.friends.includes(action.payload)) {
        console.log(`${action.payload} is already in your chats.`);
      } else {
        state._loggedInUser.friends.push(action.payload);
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
