import React from "react";

function Nav({ onButtonClick }) {
  return (
    <>
      <div className="navbar">
        <button className="red-button" onClick={() => onButtonClick(0)}>
          BK1
        </button>
        <button className="red-button" onClick={() => onButtonClick(1)}>
          BK2
        </button>
        <button className="red-button" onClick={() => onButtonClick(2)}>
          BK3
        </button>
        <button className="red-button" onClick={() => onButtonClick(3)}>
          BK4
        </button>
        <button className="red-button" onClick={() => onButtonClick(4)}>
          BK5
        </button>
      </div>
    </>
  );
}

export default Nav;
