const CallbackChild = (props) => {
  let { greet } = props;

  return (
    <div>
      <h1>Callback Child</h1>
      <button onClick={() => greet("Hello")}>
        Send Data
      </button>
    </div>
  );
};

export default CallbackChild;
