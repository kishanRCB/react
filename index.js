import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 2.00 },
    { id: 2, name: "mango", price: 4.02 },
    { id: 3, name: "orange", price: 5.90 },
  ]);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((p) => p.id !== product.id));
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </li>
        ))}
      </ul>
      <h1>Cart</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeFromCart(product)}>Remove from cart</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));