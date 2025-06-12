import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <h1>Hello, this is Admin page</h1>
      <Link to="/library">Click here to visit Library</Link>
    </>
  );
}

export default Admin;