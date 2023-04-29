import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    handleSendMessage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { handleSendMessage } = messagesSlice.actions;

export default messagesSlice;
