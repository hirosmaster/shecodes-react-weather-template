import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <p>
      This project was coded by
      <a href="https://github.com/hirosmaster">Rica Andrea Soriano</a> and is
      open-sourced on
      <a href="https://github.com/hirosmaster/cows-portfolio-shecodes">
        Github
      </a>
      and hosted on <a href="https://cowmical.netlify.app/">Netlify</a>
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
