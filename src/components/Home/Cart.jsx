// Cart.js

import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { state } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            {/* Display information about the cart item */}
            {item.PetName} - {item.Breed}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
