import { useState, useEffect } from "react";
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
  const [planState, setPlanState] = useState<Name>(state);

  const getStandardData = () => {
    axios
      .get("planField")
      .then((res) => {
        console.log(res);
        setPlanState({ ...planState, Fields: (planState.Fields = res.data) });
      })
      .catch((error) => {
        debugger;
        console.log(error);
      });

    return state.Fields;
  };
  const getPremiumData = () => {
    return state.premium;
  };

  return { planState, getStandardData };
}

export default listManager;
