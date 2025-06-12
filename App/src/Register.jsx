import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9501/register", form);
      alert(response.data);
    } catch (error) {
      alert("Registration failed");
    }
  };

  const changeData = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Welcome to registration</h1>
      <form onSubmit={submitForm}>
        <input
          onChange={changeData}
          type="text"
          name="username"
          placeholder="Create username"
          required
        />
        <input
          onChange={changeData}
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
        <input
          onChange={changeData}
          type="password"
          name="password"
          placeholder="Create password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;