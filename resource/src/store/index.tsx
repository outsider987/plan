import { useState } from "react";
import React, { createContext, useReducer, useContext } from "react";
import axios from "./axios";

const initialState = {
  standard: [],
  premium: [],
  Fields: [],
} as Name;
const stateContext = createContext(initialState);

interface Name {
  standard: [];
  premium: [];
  Fields: [];
}
function listManager() {
  const state = useContext(stateContext);
  const [planState, setCount] = useState<Name>(state);

  const setname = () => {
    // setCount({ ...adult, name: (adult.name = "test") });
    // setCount((adult) => (...adult));
  };
  const getStandardData = () => {
    axios
      .get("planField")
      .then((res) => {
        console.log(res);
        state.Fields = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return state.Fields;
  };
  const getPremiumData = () => {
    return state.premium;
  };

  return { planState, setname, getStandardData };
}

export default listManager;
