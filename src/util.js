const getClassForItem = (itemValue) => {
  switch (itemValue) {
    case "Common":
      return "common";
    case "Uncommon":
      return "uncommon";
    case "Rare":
      return "rare";
    case "Rare (Parallel)":
      return "parallel";
    default:
      return "common";
  }
};

//get a random number of cards from the given list, each rarity has a list of cards
//it avoids duplicated cards
function getRandomElements(list, numElements) {
  // Create a copy of the list to avoid modifying the original
  const shuffledList = list.slice();

  // Shuffle the list randomly
  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
  }

  // Slice the first numElements elements
  return shuffledList.slice(0, numElements);
}

//each pull gets 10 cards,  6 common, 3 common, and 1 rare or parallel(10% for parallel)
function pullCards(rarities, cards) {
  var cardList = [];
  //6 common
  var c = getRandomElements(rarities.common, 6);
  //3 uncommon
  var u = getRandomElements(rarities.uncommon, 3);
  //1 rare (5% of rare parallel)
  var r = "";
  if (Math.random() < 0.1) {
    r = getRandomElements(rarities.rare_parallel, 1);
  } else {
    r = getRandomElements(rarities.rare, 1);
  }
  cardList = c.concat(...u, ...r);

  //order the list from common to rare
  return cardList.reduce((result, id) => {
    const obj = cards.find((object) => object.id === id);
    if (obj) {
      result.push(obj);
    }
    return result;
  }, []);
}

export { getClassForItem, getRandomElements, pullCards };
