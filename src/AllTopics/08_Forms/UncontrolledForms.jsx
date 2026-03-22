import { useRef } from "react";

const UncontrolledForms = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    
    console.log(user);
  };

  return (
    <div>
      <h1>Uncontrolled Forms</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Email" ref={emailRef} />
        <br />
        <input type="text" placeholder="Enter Password" ref={passwordRef} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForms;
