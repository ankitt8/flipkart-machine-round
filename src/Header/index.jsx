import React from "react";
import "./style.css";
function Header() {
  return (
    <div className="headerContainer">
      <div className="title">Filter by Title / Order ID</div>
      <p className="text-secondary">Start typing to search</p>
      <div className="divider" />
      <hr />
    </div>
  );
}

export { Header };
