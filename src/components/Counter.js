import React from "react";

function Counter(props) {
  const { number, handleIncrease, handleDecrease } = props;

  return (
    <React.Fragment>
      <h1>{number}</h1>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </React.Fragment>
  );
}

export default Counter;
