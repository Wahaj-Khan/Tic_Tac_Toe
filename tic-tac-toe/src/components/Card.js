import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [backgroundColor, setBackgroundColor] = useState("rgb(255, 255, 255)");

  const handleClick = () => {
    // Update the background color based on the player
    if (props.player === 1) {
      setBackgroundColor("rgb(149, 255, 149)");
    } else if (props.player === 2) {
      setBackgroundColor("rgb(217, 0, 0)");
    }

    // Pass the card number to the parent component
    props.onClick(props.num);
  };

  return (
    <div className="card" style={{ backgroundColor }} onClick={handleClick}>
      <text style={{ color: "black" }}>{props.num}</text>
    </div>
  );
};

export default Card;
