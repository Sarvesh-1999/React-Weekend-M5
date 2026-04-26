import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      let resp = await axios.post("http://localhost:9000/users", formData);
      console.log(resp);
      navigate("/all-users");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <section className="h-screen bg-gray-100 p-10">
      <form
        onSubmit={formSubmit}
        className="bg-white p-5 rounded max-w-2xl mx-auto"
      >
        <h1 className="text-2xl font-bold pb-5 text-center">Create a User</h1>
        <label htmlFor="username" className="font-semibold text-gray-900">
          Username
        </label>
        <br />
        <input
          value={formData.username}
          onChange={handleChange}
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
          className="border w-full p-2 border-gray-300 rounded"
        />
        <br />
        <br />
        <label htmlFor="username" className="font-semibold text-gray-900">
          Email
        </label>
        <br />
        <input
          value={formData.email}
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          className="border w-full p-2 border-gray-300 rounded"
        />
        <br />
        <br />
        <label htmlFor="username" className="font-semibold text-gray-900">
          Password
        </label>
        <br />
        <input
          value={formData.password}
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          className="border w-full p-2 border-gray-300 rounded"
        />
        <br />
        <br />
        <button
          type="submit"
          className="bg-violet-700 text-white py-1 px-5 rounded font-semibold cursor-pointer"
        >
          Create
        </button>
      </form>
    </section>
  );
};

export default CreateUser;
