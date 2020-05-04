import React from "react";
import "./App.scss";
import Title from "./components/title";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import AddPlayerForm from "./components/AppPlayerForm";

function App() {
  return (
    <div className="App">
      <Title />
      <Scoreboard />
      <AddPlayerForm />
    </div>
  );
}

export default App;
