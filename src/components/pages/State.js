import React, { useState } from "react";

function State() {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const stateStyle = {
    fontStyle: "sans-sefif",
    fontSize: "80px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    minHeight: "80vh",
    background: "linear-gradient(90deg, #bf7a38, #ffffff, #bf7a38)",
  };

  const buttonStyle = {
    maxWidth: "600px",
    width: "100%",
    fontStyle: "sans-sefif",
    fontSize: "80px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "white",
  };

  return (
    <div style={stateStyle}>
      <button onClick={decrementCount} style={buttonStyle}>
        -
      </button>
      <p>{count}</p>
      <button onClick={incrementCount} style={buttonStyle}>
        +
      </button>
    </div>
  );
}

export default State;
