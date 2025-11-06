import { useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
  { id: 1, name: "Football", price: 999, img: "https://via.placeholder.com/150" },
  { id: 2, name: "Cricket Bat", price: 2499, img: "https://via.placeholder.com/150" },
  { id: 3, name: "Tennis Racket", price: 1899, img: "https://via.placeholder.com/150" },
  { id: 4, name: "Basketball", price: 799, img: "https://via.placeholder.com/150" },
  { id: 5, name: "Volleyball", price: 699, img: "https://via.placeholder.com/150" },
  { id: 6, name: "Badminton Racket", price: 1499, img: "https://via.placeholder.com/150" },
  { id: 7, name: "Table Tennis Paddle", price: 1299, img: "https://via.placeholder.com/150" },
  { id: 8, name: "Hockey Stick", price: 2299, img: "https://via.placeholder.com/150" },
  { id: 9, name: "Skateboard", price: 2999, img: "https://via.placeholder.com/150" },
  { id: 10, name: "Running Shoes", price: 3499, img: "https://via.placeholder.com/150" },
  { id: 11, name: "Boxing Gloves", price: 1599, img: "https://via.placeholder.com/150" },
  { id: 12, name: "Sports Cap", price: 499, img: "https://via.placeholder.com/150" },
  { id: 13, name: "Gym Gloves", price: 699, img: "https://via.placeholder.com/150" },
  { id: 14, name: "Skipping Rope", price: 299, img: "https://via.placeholder.com/150" },
  { id: 15, name: "Shin Guards", price: 899, img: "https://via.placeholder.com/150" },
  { id: 16, name: "Cricket Helmet", price: 1999, img: "https://via.placeholder.com/150" },
  { id: 17, name: "Carrom Board", price: 2499, img: "https://via.placeholder.com/150" },
  { id: 18, name: "Dumbbells (5kg)", price: 999, img: "https://via.placeholder.com/150" },
  { id: 19, name: "Yoga Mat", price: 799, img: "https://via.placeholder.com/150" },
  { id: 20, name: "Swimming Goggles", price: 499, img: "https://via.placeholder.com/150" }
];


  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <h1 style={{ textAlign: "center" }}>Sports Store</h1>

      <div className="product-list">
        {products.map((p) => (
            <ProductCard product={p} addToCart={addToCart} />
          
        ))}
      </div>
    </>
  );
}
