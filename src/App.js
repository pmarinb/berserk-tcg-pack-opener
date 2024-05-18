import "./App.css";
import React, { useState } from "react";
import CardTracker from "./components/cardTracker";
import Card from "./components/card";
import Modal from "./components/modal";
import { getClassForItem, pullCards } from "./util";
const data = require("./cards.json");

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [cardPulls, setCardPulls] = useState([]);
  const [pulledCards, setPulledCards] = useState({
    current: 0,
    total: 200,
    common: [],
    common_total: 60,
    uncommon: [],
    uncommon_total: 60,
    rare: [],
    rare_total: 40,
    parallel: [],
    parallel_total: 40,
  });

  const cardList = data.collections[0].cards;

  //add cards for the counter
  const addCard = (rarity, id) => {
    if (!pulledCards[rarity].includes(id)) {
      setPulledCards((prevState) => {
        return {
          ...prevState,
          [rarity]: [...prevState[rarity], id],
          current: prevState.current + 1,
        };
      });
    }
  };

  //handle the button for pulling cards
  const handlePulls = () => {
    const pc = pullCards(
      data.collections[0].rarities,
      data.collections[0].cards
    );
    setCardPulls(pc);
    pc.forEach((element) => {
      addCard(getClassForItem(element.rarity), element.id);
    });
    openModal();
  };

  return (
    <div className="App">
      <h1 className="red" style={{ textAlign: "center" }}>
        Berserk TCG Simulator
      </h1>

      <div className="my-div">
        <div className="element1">
          <div className="centered-content">
            <button className="red-button" onClick={() => handlePulls()}>
              Open A Pack
            </button>
          </div>
        </div>
        <div className="element2">
          <CardTracker cardCounter={pulledCards}></CardTracker>
        </div>
      </div>

      <div className="cards-grid">
        {cardList.map((card) => (
          <Card
            key={card.id}
            card={card}
            inList={pulledCards[getClassForItem(card.rarity)].includes(card.id)}
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal} cardPulls={cardPulls}></Modal>
      )}
    </div>
  );
}

export default MyComponent;
