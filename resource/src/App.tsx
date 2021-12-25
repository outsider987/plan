import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link, Router } from "react-router-dom";
import nameManager from "./store";
import cardManager from "./store/card";
import otherManager from "./store/other";
import Header from "./components/Header";
import { render } from "@testing-library/react";

function App() {
  const { adult, setname } = nameManager();
  const { cardState } = cardManager();
  const { otherState } = otherManager();
  return (
    <div className="App">
      <Header></Header>
      <div className="grid grid-cols-3 w-full">
        <div className="content__layout">
          <div></div>
        </div>
        <div className="content__layout">2</div>
        <div className="content__layout">3</div>
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
