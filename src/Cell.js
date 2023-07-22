// Cell.js
import React from "react";
import "./Cell.css"; // You can customize the CSS for the cell here

const Cell = ({ isLit, onClick }) => {
  return (
    <div
      className={`Cell ${isLit ? "Cell-lit" : ""}`}
      onClick={onClick}
    ></div>
  );
};

export default Cell;

