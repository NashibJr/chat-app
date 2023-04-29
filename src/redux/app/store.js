import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "../users/usersSlice";
import messagesSlice from "../messages/messagesSlice";

const reducers = combineReducers({
  users: usersSlice.reducer,
  messages: messagesSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});
