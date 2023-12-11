// In App.js
import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [tempe, setTempe] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const pairs = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  var temp = [];
  const handleCardClick = (num) => {
    if (currentPlayer === 1) {
      setPlayer1((prevPlayer1) => [...prevPlayer1, num]);
      setTempe(true);
    } else {
      setPlayer2((prevPlayer2) => [...prevPlayer2, num]);
      setTempe(false);
    }

    // Switch to the next player
    setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
    if (tempe === true) {
      checkPlayerAgainstPairs(player1);
    } else {
      checkPlayerAgainstPairs(player2);
    }
  };

  function checkPlayerAgainstPairs(player) {
    if (player.length >= 3) {
      for (let i = 0; i <= player.length - 3; i++) {
        const playerSubset = player.slice(i, i + 3);

        let foundPair = false;

        for (const pair of pairs) {
          if (playerSubset.sort().toString() === pair.sort().toString()) {
            foundPair = true;
            console.log(
              `Found a pair for elements ${playerSubset.join(
                ", "
              )} in pair ${pair.join(", ")}`
            );
            setPlayer1([]);
            setPlayer2([]);
            break;
          }
        }

        if (!foundPair) {
          console.log(`No pair found for elements ${playerSubset.join(", ")}`);
        }
      }
    } else {
      return;
    }
  }

  return (
    <div className="mainContainer">
      <div style={{ flexDirection: "row" }}>
        <div style={{ color: "white" }}>
          <p>Player 1 Selections: {player1.join(", ")}</p>
          <p>Player 2 Selections: {player2.join(", ")}</p>
          <p>Current Player: {currentPlayer}</p>
        </div>
        <div style={{ display: "flex" }}>
          <Card num={"1"} onClick={handleCardClick} player={currentPlayer} />
          <Card num={"2"} onClick={handleCardClick} player={currentPlayer} />
          <Card num={"3"} onClick={handleCardClick} player={currentPlayer} />
        </div>

        <div style={{ display: "flex" }}>
          <Card num={"4"} onClick={handleCardClick} player={currentPlayer} />
          <Card num={"5"} onClick={handleCardClick} player={currentPlayer} />
          <Card num={"6"} onClick={handleCardClick} player={currentPlayer} />
        </div>

        <div style={{ display: "flex" }}>
          <Card num={"7"} onClick={handleCardClick} player={currentPlayer} />
          <Card num={"8"} onClick={handleCardClick} player={currentPlayer} />
          <Card num={"9"} onClick={handleCardClick} player={currentPlayer} />
        </div>
      </div>
    </div>
  );
}

export default App;
