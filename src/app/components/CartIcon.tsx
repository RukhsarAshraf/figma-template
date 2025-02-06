"use client";

import { useState } from "react";
import Cartbar from "./Cartbar";
import { useCart } from "../context/CartProvider";
import { GrCart } from "react-icons/gr";

const CartIcon = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {countAllItems} = useCart();
      const cartItems = countAllItems();

  // Load cart data and update the counter when the component mounts
 

  return (
    <div className="relative">
      <button
        className="relative "
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <GrCart className="hover:text-gray-600 text-xl lg:text-3xl cursor-pointer"/>
        
        {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2 py-1">
                    {cartItems}
                </span>
                )}
        
      </button>
      {isCartOpen && <Cartbar />} {/* Show Cartbar when cart icon is clicked */}
    </div>
  );
};

export default CartIcon;