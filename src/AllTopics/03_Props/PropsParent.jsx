import PropsChild from "./PropsChild";
import PropsChild2 from "./PropsChild2";

const PropsParent = () => {
  let data1 = "Hello World";
  let data2 = { firstname: "John" };
  let data3 = [10, 20, 30];

  return (
    <>
      <h1>I am Parent</h1>

      {/* SENDING MULTIPLE PROPS */}
      <PropsChild str={data1} obj={data2} arr={data3} />

      {/* SENDING SINGLE PROP WITH MULTIPLE DATA  */}
      <PropsChild2 value={{ data1, data2, data3 }} />
    </>
  );
};
export default PropsParent;
