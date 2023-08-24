import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
//4- wrap all app with provider
import {ContextProvider}  from "./components/ContextExample";
ReactDOM.render(
  <div>
    <ContextProvider>
      <App />
    </ContextProvider>
  </div>,
  document.getElementById("root")
);
