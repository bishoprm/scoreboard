import React, { useState } from "react";
import Player from "../Player/Player";
import "./Scoreboard.scss";
import AddPlayerForm from "../AppPlayerForm";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("name"); // either "score" or "name"

  const [players, set_players] = useState([
    { id: null, name: "", score: null },
    // { id: 2, name: "Xander", score: 14 },
    // { id: 3, name: "Willow", score: 4 },
    // { id: 4, name: "Tara", score: 42 },
  ]);

  const players_sorted =
    // first "copy" the array (spread operator)
    // then sort it with the `compare_score` callback function
    sort_by === "name"
      ? [...players].sort(compare_name)
      : [...players].sort(compare_score);
  // it's a ternary because this resolves to a value!!! if/else would be an instruction

  // what I want to do: make it so that, if the event.target.value is score, it sorts
  // by score. if the value is name, it sorts by name.

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  // Defining the callback function:
  const incrementScore = (id) => {
    console.log("id?", id);
    // const id = 2;
    const new_players_array = players.map((player) => {
      // decide whether this player's score needs to be incremented
      if (player.id === id) {
        // and if so, create a new player object,
        return {
          // but first copying over the player object's data
          ...player,
          // and then overriding the score property to be incremented
          score: player.score + 1,
        };
      } else {
        // else, just keep them
        return player;
      }
    });
    set_players(new_players_array);
  };

  const reset = () => {
    const resetArray = players.map((player) => {
      return { ...player, score: 0 };
    });
    set_players(resetArray);
  };

  const randomize = () => {
    const resetArray = players.map((player) => {
      return { ...player, score: Math.floor(Math.random() * 100) };
    });
    set_players(resetArray);
  };

  const addPlayer = (name) => {
    console.log("Lets add a new player with the name:", name);
    const newPlayer = { id: players.length + 1, name: name, score: 0 };
    const addANewOne = [...players, newPlayer];
    set_players(addANewOne);
  };

  return (
    <div className="Scoreboard">
      <h2>Player's Scores:</h2>
      <p>
        <button onClick={reset}>reset</button>
        <button onClick={randomize}>randomize score</button>
        <br />
        Sort order: <br />
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <p>
        {players_sorted.map((player) => {
          if (player.id === null) {
            return "Add a new players below, enjoy the game!";
          } else {
            return (
              <Player
                key={player.id}
                name={player.name}
                score={player.score}
                id={player.id}
                // Passing it down as a prop
                incrementScore={incrementScore}
              />
            );
          }
        })}
      </p>
      <p>
        <AddPlayerForm addPlayer={addPlayer} />
      </p>
    </div>
  );
}
