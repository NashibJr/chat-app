import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: nanoid(),
      username: "Maracus Rashford",
      email: "marcusrashford@email.com",
      password: "marcus@10",
    },
    {
      id: nanoid(),
      username: "Paul Pogba",
      email: "paulpogbad@email.com",
      password: "pogba@00006",
    },
    {
      id: nanoid(),
      username: "Bruno Fernandes",
      email: "brunofernandes@email.com",
      password: "bfernandes@_8",
    },
    {
      id: nanoid(),
      username: "David De Dea",
      email: "daviddegea@email.com",
      password: "daviddave@0001",
    },
    {
      id: nanoid(),
      username: "Jadon Sancho",
      email: "jadonmaliksancho@email.com",
      password: "@sanchooo10",
    },
  ],
  _loggedInUser: [],
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
  },
});

export const { handleLogin, handleLoggedinUser } = usersSlice.actions;

export default usersSlice;
