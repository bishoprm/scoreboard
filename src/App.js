import React from "react";
import "./App.scss";
import Title from "./components/title";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {
  return (
    <div className="App">
      <Title />
      <Scoreboard />
    </div>
  );
}

export default App;
