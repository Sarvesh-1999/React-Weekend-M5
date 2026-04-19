import { useSelector, useDispatch } from "react-redux";
import { incre, decre, reset } from "./ReduxApp";

const Counter = () => {
  let count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={() => dispatch(incre("hii"))}>increment</button>
      <button onClick={() => dispatch(decre("hii"))}>decrement</button>
      <button onClick={() => dispatch(reset("hii"))}>reset</button>
    </div>
  );
};

export default Counter;
