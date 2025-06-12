import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9501/login", form);
      alert(response.data);
      navigate("/admin");
    } catch (error) {
      alert("Login failed");
    }
  };

  const changeData = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Welcome to Login</h1>
      <form onSubmit={submitForm}>
        <input
          onChange={changeData}
          type="text"
          name="username"
          placeholder="Enter username"
          required
        />
        <input
          onChange={changeData}
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;