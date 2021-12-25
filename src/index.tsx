import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  useNavigate,
  HashRouter,
  useRoutes,
} from "react-router-dom";
import { HomeRoute } from "~/router/index";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes >
          {routes.map((route, index) => {
            return (
              < Route
                path={route.path}
                element={<route.component />}
              />

            )
          })
          }
          
        </Routes>
      </Suspense> */}

      <HomeRoute />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
