import React from "react";
import "./Player.scss";

export default function Player(props) {
  // the event listener callback
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
  };

  return (
    <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <p>
        {props.name}: (score: {props.score}){" "}
        <button onClick={onClickIncrement}>+</button>
      </p>
    </li>
  );
}
