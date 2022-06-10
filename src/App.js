import React, { useState } from "react";
import { ChatList } from "./ChatList";
import { Header } from "./Header";
import { ChatDetails } from "./ChatDetails";
import "./App.css";
function App() {
  const [chatDetails, setChatDetails] = useState(null);
  const handleChatRowClick = (chat) => {
    setChatDetails({ ...chat });
  };
  return (
    <div className="container">
      <div
        style={{ width: chatDetails ? "50%" : "100%" }}
        className="chatListHeaderWrapper"
      >
        <Header />
        <ChatList
          handleChatRowClick={handleChatRowClick}
          chatDetails={chatDetails}
        />
      </div>
      {chatDetails && <ChatDetails chatDetails={chatDetails} />}
    </div>
  );
}

export default App;
