import React, { useState } from "react";
import Links from "../components/links";
import "../styles/messages.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Messages = () => {
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const messageReceiver = useSelector(
    (state) => state.users._loggedInUser.friends
  ).find((user) => user.id === id);

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
            <input type="button" value="send" />
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Messages;
