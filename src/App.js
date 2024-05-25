import "./App.css";
import React, { useState } from "react";
import CardTracker from "./components/cardTracker";
import Card from "./components/card";
import Modal from "./components/modal";
import Nav from "./components/navBar";

import { getClassForItem, pullCards, getCollection } from "./util";
const data = require("./cards.json");

function MyComponent() {
  const [collection, SetCollection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayAll, setDisplayAll] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [cardPulls, setCardPulls] = useState([]);
  const [pulledCards, setPulledCards] = useState([
    {
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
    },
    {
      current: 0,
      total: 84,
      common: [],
      common_total: 24,
      uncommon: [],
      uncommon_total: 20,
      rare: [],
      rare_total: 20,
      parallel: [],
      parallel_total: 20,
    },
  ]);

  const cardList = data.collections[collection];

  //handle the navbar
  const handleCollection = (value) => {
    SetCollection(value);
  };

  //for displayAll Button
  const handleToggle = () => {
    setDisplayAll((prevState) => !prevState);
  };

  //add cards for the counter
  const addCard = (setIndex, rarity, id) => {
    setPulledCards((prevState) => {
      const cardSet = prevState[setIndex];

      if (!cardSet[rarity].includes(id)) {
        // Create a new card set with updated values
        const updatedCardSet = {
          ...cardSet,
          [rarity]: [...cardSet[rarity], id],
          current: cardSet.current + 1,
        };

        // Return the new state with the updated card set
        return prevState.map((set, index) =>
          index === setIndex ? updatedCardSet : set
        );
      } else {
        return prevState;
      }
    });
  };

  //handle the button for pulling cards
  const handlePulls = () => {
    const pc = pullCards(cardList.rarities, cardList.cards);
    setCardPulls(pc);
    pc.forEach((element) => {
      addCard(collection, getClassForItem(element.rarity), element.id);
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
          <Nav onButtonClick={handleCollection} />
          <p className="red">Current selection: {getCollection(collection)}</p>
          <button className="red-button" onClick={handleToggle}>
            {displayAll ? "Display All: On" : "Display All: Off"}
          </button>
        </div>
        <div className="element2">
          <div className="centered-content">
            <button className="red-button" onClick={() => handlePulls()}>
              Open A Pack
            </button>
          </div>
        </div>
        <div className="element3">
          <CardTracker cardCounter={pulledCards[collection]}></CardTracker>
        </div>
      </div>

      <div className="cards-grid">
        {cardList.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            displayAll={displayAll}
            inList={pulledCards[collection][
              getClassForItem(card.rarity)
            ].includes(card.id)}
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
