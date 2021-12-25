import { useState } from "react";
import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  name: "mary",
  gender: 1,
} as Name;
const stateContext = createContext(initialState);
const { Provider } = stateContext;

interface Name {
  name: string;
  gender: number;
}
function nameManager() {
  const state = useContext(stateContext);
  const [adult, setCount] = useState<Name>(state);

  const setname = () => {
    setCount({ ...adult, name: (adult.name = "test") });
    // setCount((adult) => (...adult));
  };
  const getData = () => {
    return state.gender;
  };

  return { adult, setname };
}

export default nameManager;
