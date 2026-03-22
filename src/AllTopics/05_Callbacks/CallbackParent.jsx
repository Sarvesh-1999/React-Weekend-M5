import CallbackChild from "./CallbackChild";

const CallbackParent = () => {
    
  // RECIEVES DATA FROM CHILD
  function greet(value) {
    console.log(value, "Parent");
  }

  return (
    <div>
      <h1>Callback Parent</h1>
      <CallbackChild greet={greet} />
    </div>
  );
};

export default CallbackParent;
