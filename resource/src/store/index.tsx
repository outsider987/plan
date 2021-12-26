import { useState, useEffect } from "react";
import React, { createContext, useReducer, useContext } from "react";
import axios from "./axios";

export interface Name {
  plans: [];
  Fields: [];
  isLoading: boolean;
}
export interface Plan {
  id: number;
  name: string;
  general: boolean;
  specialist: boolean;
  physiotherapy: boolean;
  others: boolean;
}
const initialState = {
  plans: [] as Plan[],
  Fields: [],
  isLoading: false,
} as Name;
const stateContext = createContext(initialState);

function listManager() {
  const state = useContext(stateContext);
  const [planState, setPlanState] = useState<Name>(state);

  const getStandardData = async () => {
    await setLoading();
    await sleep(3000);
    await axios
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
  };
  const getPlansData = async () => {
    await setLoading();
    await sleep(3000);
    await axios
      .get("plans")
      .then((res) => {
        console.log(res);
        setPlanState({
          ...planState,
          plans: (planState.plans = res.data),
          isLoading: (planState.isLoading = false),
        });
        console.log(planState.plans);
      })
      .catch((error) => {
        debugger;
        console.log(error);
      });
  };
  const setLoading = () => {
    setPlanState({
      ...planState,
      isLoading: (planState.isLoading = true),
    });
  };
  function sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  return { planState, getStandardData, getPlansData };
}

export default listManager;
