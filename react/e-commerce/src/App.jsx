import { useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import Cart from "./Cart.jsx";

export default function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    { id: 1, name: "Football", price: 999, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcSJ-IbCSJAy9q-ZT3sd91dwVxtBZ7m9WAXw&s" },
    { id: 2, name: "Cricket Bat", price: 2499, img: "https://shop.teamsg.in/cdn/shop/products/SLAMMER-CLASSIC_2-scaled.jpg?v=1745324932&width=1946" },
    { id: 3, name: "Tennis Racket", price: 1899, img: "https://media.istockphoto.com/id/1051131134/vector/tennis-icon-on-white-background.jpg?s=612x612&w=0&k=20&c=gFiOceH1tVNoyBHtGVpmZ7qw5lUermLPBlAZbP7YHOo=" },
    { id: 4, name: "Basketball", price: 799, img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png" },
    { id: 5, name: "Volleyball", price: 699, img: "https://www.niviasports.com/cdn/shop/files/2B0A6619.jpg?v=1714206140" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar cartCount={cart.length} onCartClick={() => setShowCart(!showCart)} />
      {showCart && (
        <Cart cart={cart} removeFromCart={removeFromCart} onClose={() => setShowCart(false)} />
      )}
      <h1 style={{ textAlign: "center" }}>Sports Store</h1>

      <div className="product-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}
