import React, { useState } from "react";
import Directions from "./Directions";

const Block = ({ color }) => {
  const [movement, setMovement] = useState({ top: 0, left: 0 });

  let styles = {
    background: `linear-gradient(${color.one}, ${color.two})`,
    top: movement.top,
    left: movement.left,
  };

  let moveXPlus = () => {
    setMovement({ ...movement, left: movement.left + 30 });
  };

  let moveXMinus = () => {
    setMovement({ ...movement, left: movement.left - 30 });
  };

  let moveYPlus = () => {
    setMovement({ ...movement, top: movement.top + 30 });
  };

  let moveYMinus = () => {
    setMovement({ ...movement, top: movement.top - 30 });
  };

  return (
    <div className="block" style={styles}>
      <Directions
        topPlus={moveYPlus}
        topMinus={moveYMinus}
        leftPlus={moveXPlus}
        leftMinus={moveXMinus}
      />
    </div>
  );
};

export default Block;
