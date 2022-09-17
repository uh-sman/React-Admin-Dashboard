import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// <React.StrictMode>
{
  /* <App /> */
}
{
  /* </React.StrictMode> */
}
// );
ReactDOM.render(
  <React.StrictMode>
    {/* <ContextProvider> */}
    <App />
    {/* </ContextProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
