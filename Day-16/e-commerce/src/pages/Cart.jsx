

import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">🛒 Cart Items</h1>

      {cartItems.map((item, index) => (
        <div key={index} className="border p-2 m-2">
          <h2>{item.title}</h2>
          <p>₹ {item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;