import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./root";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./context/auth";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth>
        <Root />
      </Auth>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
