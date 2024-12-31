import React, { useState } from "react";
import { BaseProps } from "../types/baseProps";

const CounterComponent: React.FC<BaseProps> = ({ className, style }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={className} style={style}>
      <p style={{ fontSize: "16px", color: "#00796b" }}>Count: {count}</p>
      <button
        style={{
          padding: "10px",
          backgroundColor: "#00796b",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginRight: "10px",
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{
          padding: "10px",
          backgroundColor: "#d32f2f",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterComponent;
