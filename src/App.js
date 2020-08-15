import React from "react";
import Countdown from "./Components/Countdown";
import Emoji from "./Components/Emoji";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        {" "}
        <Emoji symbol={"✈️"} label="airplane" />
        Time Until Microsoft Flight Simulator 2020
        <Emoji symbol={"✈️"} label="airplane" />
      </h1>
      <Countdown />
    </div>
  );
}

export default App;
