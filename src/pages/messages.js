import React from "react";
import Links from "../components/links";
import "../styles/messages.css";

const Messages = () => {
  return (
    <div className="messages-content">
      <div>
        <Links />
      </div>
      <div className="messages">
        <header>
          <p>David De gea</p>
        </header>
        <main></main>
        <footer>
          <form>
            <input type="text" placeholder="Type message..." name="message" />
            <input type="button" value="send" />
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Messages;
