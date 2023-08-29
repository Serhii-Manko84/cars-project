import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Router from "./Router/Router.jsx";
import "./assets/global.css";
import AuthProvaider from "./provaiders/AuthProvaider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvaider>
      <Router />
    </AuthProvaider>
  </React.StrictMode>
);
