import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Library() {
  const [result, setResult] = useState({ content: [] });

  const viewAllBooks = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:9501/book");
      setResult(response.data); // assumes response.data has "content" array
    } catch (error) {
      alert("Failed to fetch books");
      console.error(error);
    }
  };

  return (
    <>
      <h1>Books in Library</h1>
      <Link to="/abook">Add book</Link>
      <br />
      <button onClick={viewAllBooks}>View all books</button>
      <br />
      <Link to="/vauthorbook">View by author name</Link>
      <br />
      <ul>
        {result.content.map((x, index) => (
          <li key={index}>
            {x.title} - {x.author} - {x.description}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Library;

       
//li-list of items
//response.data->the data which we got from spring book