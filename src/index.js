import React from "react";
import ReactDOM from "react-dom";
import QRreader from "./app";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <QRreader />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
