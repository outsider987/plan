import React, { Suspense, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link, Router } from "react-router-dom";
import listManager, { Plan } from "./store";

import Header from "./components/Header";
import { render } from "@testing-library/react";
import Spin from "./components/Spin";
import PlanField from "./components/PlanField";
import PlanList from "./components/PlanList";
import Modal from "./components/Modal";

function App() {
  const { planState, getStandardData, getPlansData } = listManager();
  useEffect(() => {
    getStandardData();
    getPlansData();
  }, []);

  const planLayoutStyle = {
    gridTemplateRows: "10fr 90fr",
    height: "-webkit-fill-available",
  };

  return (
    <div className={` w-full h-full `}>
      <div
        className={`grid border border-black rounded-2xl m-10  `}
        style={planLayoutStyle}
      >
        <Modal toggle={planState.isLoading}>
          <Spin></Spin>
        </Modal>

        <Header></Header>
        <div className="grid grid-cols-3 w-full  p-4  ">
          <PlanField fileds={planState.Fields} />
          {planState.plans.map((plan: Plan) => (
            <PlanList plan={plan} />
          ))}
        </div>
      </div>

      {/* <button onClick={setname}>button</button>
      <div> {adult.name}</div>
      <div className="w-full">
        <Link className="w-full block" to="/edit">
          router header
        </Link>
        <div>{cardState[1]}</div>
      </div>

      <button> </button> */}
    </div>
  );
}

export default App;
