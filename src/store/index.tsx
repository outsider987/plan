import { useState } from "react";
import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  standard: [],
  premium: [],
} as Name;
const stateContext = createContext(initialState);

interface Name {
  standard: [];
  premium: [];
}
function listManager() {
  const state = useContext(stateContext);
  const [adult, setCount] = useState<Name>(state);

  const setname = () => {
    // setCount({ ...adult, name: (adult.name = "test") });
    // setCount((adult) => (...adult));
  };
  const getStandardData = () => {
    return state.premium;
  };
  const getPremiumData = () => {
    return state.premium;
  };

  return { adult, setname };
}

export default listManager;
