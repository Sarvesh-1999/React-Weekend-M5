import React, { useState, useEffect, useRef } from "react";

const LifeCycleInFbc = () => {
  const [count, setCount] = useState(0);
  const initailRender = useRef(true);

  useEffect(() => {
    console.log("Component Mounted");
    
    let id = setInterval(() => {
      console.log("Hii");
    }, 2000);

    return () => {
      console.log("Component Unmounted");
      clearInterval(id)
    };
  }, []);

  useEffect(() => {
    if (initailRender.current) {
      initailRender.current = false;
      return;
    }
    console.log("Component Updated");
  }, [count]);

  return (
    <div>
      <h1>Learn LifeCycleInFbc {count}</h1>
      <button onClick={() => setCount(count + 1)}>update</button>
    </div>
  );
};

export default LifeCycleInFbc;
