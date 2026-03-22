import { useState } from "react";

const ControlledForms2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <div>
      <h1>ControlledForms 2</h1>
      <form>
        <input type="text" placeholder="Enter Username" name="username" value={formData.username} onChange={handleChange}/>
        <br />
        <input type="text" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange}/>
        <br />
        <input type="text" placeholder="Enter Password" name="password" value={formData.password} onChange={handleChange}/>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms2;
