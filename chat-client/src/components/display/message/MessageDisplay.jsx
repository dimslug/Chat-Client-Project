import React from "react";

function MessageDisplay({ messages }) {
  return (
    <div>
      <h3>Messages:</h3>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessageDisplay;
