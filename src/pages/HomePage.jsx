import React from "react";
import CustomNavbar from "./Navbar";

function HomePage() {
  return (
    <>
      <CustomNavbar />
      <div className="container mt-4">
        <h1>Welcome to Ajit Quick Cart</h1>
        <p>Your favorite online shopping destination!</p>
      </div>
    </>
  );
}

export default HomePage;
