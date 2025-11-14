import React from "react";

export default function Cart({ cart, removeFromCart, onClose }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        position: "fixed",
        top: "80px",
        right: "20px",
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        maxWidth: "400px",
        maxHeight: "80vh",
        overflowY: "auto",
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
        <h2>Your Cart</h2>
        <button
          onClick={onClose}
          style={{
            background: "#333",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          ✕
        </button>
      </div>

      {cart.length === 0 && <p>No items in cart.</p>}

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            background: "white",
            borderRadius: "6px",
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: "16px" }}>{item.name}</h3>
            <p style={{ margin: "5px 0 0 0" }}>₹{item.price}</p>
          </div>

          <button
            onClick={() => removeFromCart(index)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <h3 style={{ marginTop: "20px", borderTop: "2px solid #ccc", paddingTop: "10px" }}>
          Total: ₹{total}
        </h3>
      )}
    </div>
  );
}  