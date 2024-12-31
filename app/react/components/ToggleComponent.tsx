import React, { useState } from "react";
import { BaseProps } from "../types/BaseProps";

const ToggleComponent: React.FC<BaseProps> = ({ className, style }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={className} style={style}>
      <button
        style={{
          padding: "10px",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle Visibility
      </button>
      {isVisible && (
        <p style={{ fontSize: "16px", color: "#333" }}>
          This text can be toggled!
        </p>
      )}
    </div>
  );
};

export default ToggleComponent;
