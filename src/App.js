// App.js
import React, { useState } from "react";
import Board from "./Board";

const App = () => {
  const boardSize = 5; // You can adjust the board size as per your preference

  const [hasWon, setHasWon] = useState(false);

  const handleCellClick = () => {
    // Check for a win here (i.e., all lights are off)
    // You can call the isBoardEmpty() function from the Board component to check if the board is empty
    if (isBoardEmpty()) {
      setHasWon(true);
    }
  };

  const isBoardEmpty = () => {
    // Implement this function to check if the board is empty (all lights off)
    // You can get access to the Board component's functions and state using refs if needed
    // Example: boardRef.current.isBoardEmpty()
  };

  return (
    <div className="App">
      {hasWon ? (
        <div>You Won!</div>
      ) : (
        <Board boardSize={boardSize} handleCellClick={handleCellClick} />
      )}
    </div>
  );
};

export default App;
