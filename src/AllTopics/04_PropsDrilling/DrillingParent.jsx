import DrillingChild1 from "./DrillingChild1";

const DrillingParent = () => {

    let data1 = "Hello Nested child"

  return (
    <div>
      <h1>Drilling Parent</h1>

      <DrillingChild1 prop1={data1}/>
    </div>
  );
};

export default DrillingParent;
