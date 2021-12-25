import React, { useState } from "react";

const otherManager = () => {
  const [otherState, setCard] = useState(["item1", "item2"]);
  return { otherState: otherState };
};

export default otherManager;
