import React from "react";
import "../modal.css"; // Import some basic styles for the modal
import Card from "./card";

const Modal = ({ isOpen, onClose, cardPulls }) => {
  //if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ❌
        </button>
        <h2 className="red">Your Pulls</h2>
        <div className="grid-container">
          {cardPulls.map((card) => (
            <Card key={card.id} card={card} inList={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
