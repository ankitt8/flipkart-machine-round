import React, { useEffect, useState } from "react";
// import { dummyData } from "./dummyData";
import "./style.css";
function ChatList({ handleChatRowClick, chatDetails }) {
  const [chatList, setChatList] = useState([]);
  const [chatSelectedId, setChatSelectedId] = useState(null);
  useEffect(() => {
    setChatSelectedId(chatDetails?.id);
  }, [chatDetails]);
  // move to a custom hook
  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://my-json-server.typicode.com/codebuds-fk/chat/chats"
      );
      const chats = await res.json();
      setChatList(chats);
    })();
  }, []);
  
  const getMessage = (chat) => {
    if (chat.messageList.length == 0) return "";
    return chat.messageList[chat.messageList.length - 1].message;
  };
  const getDate = (chat) => {
    const date = new Date(chat.latestMessageTimestamp);
    const dd = date.getDate();
    let mm = date.getMonth();
    if (mm < 10) {
      mm = `0${mm}`;
    }
    const yyyy = date.getFullYear();
    const formattedDate = `${dd}/${mm}/${yyyy}`;

    return formattedDate;
  };

  return chatList.map((chat) => {
    return (
      <div
        key={chat.id}
        className={`chatListRow ${
          chatSelectedId && chat.id === chatSelectedId ? "activeChat" : ""
        }`}
        onClick={() => handleChatRowClick(chat)}
      >
        <div className="summary">
          <div className="chatLogoContainer">
            <img className="chatLogo" src={chat.imageURL} alt="ProfilePic" />
          </div>
          <div>
            <div className="chatTitle">{chat.title}</div>
            <div className="orderID">Order {chat.orderId}</div>
            <p className="lastChatMessage">{getMessage(chat)}</p>
          </div>
        </div>
        <div className="lastDate">{getDate(chat)}</div>
      </div>
    );
  });
}

export { ChatList };
