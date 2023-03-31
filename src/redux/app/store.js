import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "../users/usersSlice";

const reducers = combineReducers({
  users: usersSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});
