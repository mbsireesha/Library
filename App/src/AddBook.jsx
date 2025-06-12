import React, { useState } from "react";
import axios from "axios";

function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9501/book/AddBook", form);
      console.log(response);
      alert(response.data);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert(error.response.data);
      } else {
        alert("Something went wrong");
      }
    }
  };

  const changeData = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Add a book</h1>
      <form onSubmit={submitForm}>
        <input
          onChange={changeData}
          type="text"
          name="title"
          placeholder="Enter title"
          required
        />
        <input
          onChange={changeData}
          type="text"
          name="author"
          placeholder="Enter author"
          required
        />
        <input
          onChange={changeData}
          type="text"
          name="description"
          placeholder="Write about the book"
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}

export default AddBook;