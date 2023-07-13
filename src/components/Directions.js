import React from "react";

const Directions = ({ topPlus, topMinus, leftPlus, leftMinus }) => {
  return (
    <div className="directions">
      <h3 onClick={leftMinus}>←</h3>
      <h3 onClick={topMinus}>↑</h3>
      <h3 onClick={leftPlus}>→</h3>
      <h3 onClick={topPlus}>↓</h3>
    </div>
  );
};

export default Directions;
