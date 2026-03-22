const PropsChild2 = (props) => {
  console.log(props); // {value : {data1 : "",data2:{} , data3:[]} }

  let { data1, data2, data3 } = props.value;

  return (
    <>
      <h1>I am Child 2</h1>
      <h2>
        {data1} {data2.firstname} {data3}
      </h2>
    </>
  );
};

export default PropsChild2;
