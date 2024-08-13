import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [ticToe, setTicToe] = useState(props.resetterState);

  const handleClick = () => {
    // Update the background color based on the player
    if (props.player === 1) {
      setTicToe("✔️");
    } else if (props.player === 2) {
      setTicToe("❌");
    }
    // Pass the card number to the parent component
    props.onClick(props.num);
  };

  return (
    <div className="card" onClick={handleClick}>
      <h2>{ticToe}</h2>
    </div>
  );
};

export default Card;
