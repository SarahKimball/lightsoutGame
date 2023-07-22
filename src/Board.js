// Board.js
import React, { useState } from "react";
import Cell from "./Cell";

const Board = ({ boardSize }) => {
  const [board, setBoard] = useState(() => {
    // Initialize the board state with random lights on/off
    const initialBoard = [];
    for (let row = 0; row < boardSize; row++) {
      const newRow = [];
      for (let col = 0; col < boardSize; col++) {
        newRow.push(Math.random() < 0.5);
      }
      initialBoard.push(newRow);
    }
    return initialBoard;
  });

  const toggleCell = (row, col) => {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      // Toggle the clicked cell
      newBoard[row][col] = !newBoard[row][col];

      // Toggle adjacent cells
      const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ];
      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;
        if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
          newBoard[newRow][newCol] = !newBoard[newRow][newCol];
        }
      }

      return newBoard;
    });
  };

  const isBoardEmpty = () => {
    return board.every((row) => row.every((cell) => !cell));
  };

  return (
    <div className="Board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="Board-row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              isLit={cell}
              onClick={() => toggleCell(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
