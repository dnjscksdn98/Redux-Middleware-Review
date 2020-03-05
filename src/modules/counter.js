const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = () => {
  return {
    type: INCREASE
  };
};

export const decrease = () => {
  return {
    type: DECREASE
  };
};

// thunk function

export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;

    case DECREASE:
      return state - 1;

    default:
      return state;
  }
}
