import React from "react";

const DrillingChild2 = (props) => {
  console.log(props); // {prop2 : ""}

  return (
    <div>
      <h1>Drilling Child 2</h1>
      <p>{props.prop2}</p>
    </div>
  );
};

export default DrillingChild2;
