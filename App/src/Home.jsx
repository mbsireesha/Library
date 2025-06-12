import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Welcome to Home page</h1>
      <Link to="/reg">Click here to Register</Link>
      <br />
      <Link to="/log">Click here to Login</Link>
      <br />
    </>
  );
}

export default Home;