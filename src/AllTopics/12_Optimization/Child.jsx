import { memo } from "react";

const Child = (props) => {
  console.log("Child");

  return <h1>Child</h1>;
};

export default memo(Child);
