import React, { useState } from "react";

const cardManager = () => {
  const [cardState, setCard] = useState(["item1", "item2"]);
  return { cardState };
};

export default cardManager;
