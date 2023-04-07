import { createSlice, nanoid } from "@reduxjs/toolkit";
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
      const loggedInUser = { ...state._loggedInUser, chats: [] };
      loggedInUser.chats.push(action.payload);
    },
  },
});

export const { handleLogin, handleLoggedinUser, handleChats } =
  usersSlice.actions;

export default usersSlice;
