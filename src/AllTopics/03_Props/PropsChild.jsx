const PropsChild = (props) => {
  console.log(props);
  // { str : "Hello World" , obj : {} , arr:[]}

  //   Object Destructuring
  let { str, obj, arr } = props;
  console.log(str);

  return (
    <>
      <h1>I am Child</h1>
      <h2>
        {str} {obj.firstname} {arr}
      </h2>
    </>
  );
};
export default PropsChild;
