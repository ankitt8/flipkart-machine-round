import React from "react";
import "./style.css";
function MessageList({ messageList }) {
  if (messageList.length === 0) {
    return "Send a message to start chatting";
  }
  return messageList.map(({ sender, message, messageId }) => {
    let alignmentClassName = "chatBot";
    if (sender === "USER") {
      alignmentClassName = "chatUser";
    }
    return (
      <div key={messageId} className={`chatContainer ${alignmentClassName}`}>
        {message}
      </div>
    );
  });
}
export { MessageList };
