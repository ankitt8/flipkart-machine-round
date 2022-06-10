import React, { useEffect, useState } from "react";
import { MessageList } from "./MessageList";
import "./style.css";

function ChatDetails({ chatDetails }) {
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState(chatDetails.messageList);
  const handleSendMessage = () => {
    setMessageList([
      ...messageList,
      { sender: "USER", message: messageInput, messageId: getRandomInt() },
    ]);
    setMessageInput('');
  };
  useEffect(() => {
    setMessageList(chatDetails.messageList);
  }, [chatDetails]);
  return (
    <div className="chatDetailsContainer">
      {/* todo reuse */}
      <div className="chatTitleContainer">
        <div className="chatLogoContainer">
          <img
            className="chatLogo"
            src={chatDetails.imageURL}
            alt="ProfilePic"
          />
        </div>
        <div className="chatTitle">{chatDetails.title}</div>
      </div>

      <div className="chatMessagesContainer">
        <MessageList messageList={messageList} />
      </div>
      <div className="chatInputContainer">
        <input
          className="chatInput"
          type="text"
          placeholder="Type a Message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>Enter</button>
      </div>
    </div>
  );
}
function getRandomInt() {
  return Math.floor(Math.random() * 100000);
}
export { ChatDetails };
