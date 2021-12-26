import { useState, useEffect } from "react";
import React, { createContext, useReducer, useContext } from "react";
import axios from "./axios";

interface Name {
  standard: [];
  premium: [];
  Fields: [];
  isLoading: boolean;
}

const initialState = {
  standard: [],
  premium: [],
  Fields: [],
  isLoading: false,
} as Name;
const stateContext = createContext(initialState);

function listManager() {
  const state = useContext(stateContext);
  const [planState, setPlanState] = useState<Name>(state);

  const getStandardData = () => {
    setLoading();
    axios
      .get("planField")
      .then((res) => {
        console.log(res);
        setPlanState({
          ...planState,
          Fields: (planState.Fields = res.data),
          isLoading: (planState.isLoading = false),
        });
      })
      .catch((error) => {
        debugger;
        console.log(error);
      });

    return state.Fields;
  };
  const setLoading = () => {
    setPlanState({
      ...planState,
      isLoading: (planState.isLoading = true),
    });
  };
  const getPremiumData = () => {
    return state.premium;
  };

  return { planState, getStandardData };
}

export default listManager;
