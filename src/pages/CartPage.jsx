import React from "react";
import CustomNavbar from "./Navbar";

function CartPage() {
  return (
    <>
      <CustomNavbar />
      <div className="container mt-4">
        <h1>Your Cart</h1>
        <p>Review and manage items in your cart.</p>
      </div>
    </>
  );
}

export default CartPage;
