/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./component/App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
