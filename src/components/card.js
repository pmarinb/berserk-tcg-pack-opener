import "../App.css";
import React, { useState } from "react";
import { getClassForItem } from "../util";
import ImageModal from "./imageModal";

function Card({ card, inList, displayAll }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (image) => {
    setSelectedCard(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <ImageModal card={selectedCard} onClose={closeModal} />}
      <div className="cardWrap" onClick={() => openModal(card)}>
        <div
          className="card"
          style={{ opacity: displayAll ? 1 : inList ? 1 : 0.1 }}
        >
          {card.rarity === "Rare (Parallel)" ? (
            <div class="holo-overlay"></div>
          ) : (
            <></>
          )}
          <img
            src={require(`${
              "./static/images/" + card.collection + "/" + card.filename
            }`)}
            alt={card.filename}
          />
        </div>
        <div className="content">
          <h4 className={getClassForItem(card.rarity)}>
            #{card.number}
            <br></br>
            {card.rarity}
          </h4>
        </div>
      </div>
    </>
  );
}

export default Card;
