import { useState } from "react";

const StatesInFbc = () => {
  const [data, setData] = useState("Hello World"); // [ud , f]
  const [count, setCount] = useState(0);

  function handleUpdate() {
    setData("Bye World");
  }

  function handleIncre() {
    // setCount(count + 1); //! DO NOT USE, IF YOU WANT TO UPDATE STATE ACCORDING TO PREVIOUS VALUE

    setCount((prev) => {
      return prev + 1;
    });
   
  }

  return (
    <div>
      <h1>State in Function based</h1>
      <h2>{data}</h2>
      <button onClick={handleUpdate}>update</button>
      <hr />
      <h2>Count is {count}</h2>
      <button onClick={handleIncre}>increment</button>
    </div>
  );
};

export default StatesInFbc;
