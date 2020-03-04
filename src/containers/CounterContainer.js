import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

function CounterContainer() {
  const number = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  return (
    <Counter
      number={number}
      handleIncrease={handleIncrease}
      handleDecrease={handleDecrease}
    />
  );
}

export default CounterContainer;
