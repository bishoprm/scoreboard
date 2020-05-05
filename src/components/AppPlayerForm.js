import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, setName] = useState("");
  const onClickAdd = () => {
    // call the callback prop passed down from the scoreboard
    props.addPlayer(name);
    setName("");
  };

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(event) => {
            console.log("new input .value:", event.target.value);
            setName(event.target.value);
          }}
        />{" "}
        <button onClick={onClickAdd}>Add</button>
      </p>
    </div>
  );
}
