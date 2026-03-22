import React, { useReducer } from "react";

let initialState = 0;
const reducerFunc = (prevState, action) => {
  switch (action) {
    case "increment":
      return prevState + 1;
  }
};

const ReducerCounter = () => {
  const [count, dispatch] = useReducer(reducerFunc, initialState); // [ud , f]

  return (
    <div>
      <h1>Learn Counter using useReducer Hook</h1>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch("increment")}>Increment</button>
    </div>
  );
};

export default ReducerCounter;
