import React from "react";
import "../imageModal.css";

const ImageModal = ({ card, onClose }) => {
  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content">
        <img
          src={require(`${"./static/images/bk1/" + card.filename}`)}
          alt="Full Size"
        />
        {card.rarity === "Rare (Parallel)" ? (
          <div class="holo-overlay"></div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
