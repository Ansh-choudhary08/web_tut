import React from "react";

export default function Navbar({ cartCount }) {
  return (
    <div
      className="navbar"
    >
      <h2>My E-Commerce</h2>
      <h3>Cart: {cartCount}</h3>
    </div>
  );
}
