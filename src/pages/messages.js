import React, { useState } from "react";
import Links from "../components/links";
import "../styles/messages.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleSendMessage } from "../redux/messages/messagesSlice";
import { nanoid } from "@reduxjs/toolkit";

const Messages = () => {
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.users._loggedInUser);
  const messageReceiver = loggedInUser.friends.find((user) => user.id === id);

  const handleSend = () => {
    dispatch(
      handleSendMessage({
        id: nanoid(),
        body: message,
        senderId: loggedInUser.id,
        receiverId: id,
      })
    );
    setMessage("");
  };

  return (
    <div className="messages-content">
      <div>
        <Links />
      </div>
      <div className="messages">
        <header>
          <p>
            <strong>{messageReceiver.username}</strong>
          </p>
        </header>
        <main></main>
        <footer>
          <form>
            <input
              type="text"
              placeholder="Type message..."
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <input type="button" value="send" onClick={handleSend} />
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Messages;
