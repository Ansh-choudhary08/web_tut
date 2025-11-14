import React from "react";
import './index.css';

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>My E-Commerce</h2>
      </div>
      <div className="navbar-middle">
        <a href="/" className="nav-link">Home</a>
        <a href="/products" className="nav-link">Products</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>
      <div className="navbar-right">
        <h3 
          onClick={onCartClick}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          Cart: {cartCount}
        </h3>
      </div>
    </div>
  );
}
