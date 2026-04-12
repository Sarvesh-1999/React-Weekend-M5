import React, { useState, useMemo, useCallback } from "react";
import Child from "./Child";

const Optimization = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const handleAdd = () => setAdd(add + 1);
  const handleMinus = () => setMinus(minus - 1);

  //   function handleMultiply() {
  //     console.log("Multiply");
  //     return add * 5;
  //   }

  let multiply = useMemo(() => {
    console.log("Multiply");
    return add * 5;
  }, [add]);

  //   function display() {
  //     console.log("I am display");
  //   }

  const display = useCallback(() => {
    console.log("I am display");
  }, []);

  return (
    <div>
      <h1>Optimization Technique</h1>
      <h2>Add {add}</h2>
      <button onClick={handleAdd}>Addition</button>

      <hr />

      <h2>Minus {minus}</h2>
      <button onClick={handleMinus}>Substraction</button>

      <hr />

      <h2>Multiply {multiply}</h2>

      <hr />

      <Child display={display} />
    </div>
  );
};

export default Optimization;
