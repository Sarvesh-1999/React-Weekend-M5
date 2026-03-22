import { useState } from "react";

const Dropdown = () => {
  const [toggle, setToggle] = useState(false);

  const handleBtn = () => setToggle((prev) => !prev);

  return (
    <>
      <h1>Create a Dropdown</h1>

      {/* USING TERNARY OPERATOR */}
      <button onClick={handleBtn}>{toggle ? "Hide" : "Show"}</button>

      {/* USING SHORT CIRCUIT  */}
      {toggle && (
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>REACT.JS</li>
        </ul>
      )}
    </>
  );
};
export default Dropdown;
