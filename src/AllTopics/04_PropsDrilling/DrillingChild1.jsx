import DrillingChild2 from "./DrillingChild2";

const DrillingChild1 = (props) => {
  console.log(props); //{prop1 : ""}

  return (
    <div>
      <h1>Drilling Child 1</h1>

      <DrillingChild2 prop2={props.prop1} />
    </div>
  );
};

export default DrillingChild1;
