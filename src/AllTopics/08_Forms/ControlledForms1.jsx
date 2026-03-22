import React, { useState } from "react";

const ControlledForms1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandle = (e) => {
    e.preventDefault();
    console.log("form Submitted");
    
    let data = { email, password };
    console.log(data);

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Learn Controlled Forms</h1>

      <form onSubmit={formHandle}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms1;
