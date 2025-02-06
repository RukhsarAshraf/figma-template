"use client";

import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { useCart } from "../context/CartProvider";


// Cartbar to display items in the cart
const Cartbar = () => {
 

  const {
    items: cartItems,
    removeFromCart,
    countTotalPrice,
  } = useCart();

  // If cart is empty, show an empty cart message
  if (cartItems.length === 0) {
    return (
      <div className="w-max absolute p-6 rounded-lg shadow-lg bg-white top-12 right-0 flex flex-col gap-4 z-20">
        <div className="text-gray-600 text-center font-medium">Your cart is empty</div>
      </div>
    );
  }

  return (
    <div className="w-max absolute p-6 rounded-lg shadow-lg bg-white top-12 right-0 flex flex-col gap-6 z-20 max-[551px]:w-screen">
      <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
      <div className="flex flex-col gap-6">
        {cartItems.map((cartItem) => (
          <div className="flex gap-4 border-b pb-4" key={cartItem.product._id}>
            {cartItem.product.image && (
              <Image
                src={urlForImage(cartItem.product.image).url()}
                alt=""
                width={80}
                height={100}
                className="object-cover rounded-md"
              />
            )}
            <div className="flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-gray-700 overflow-auto">{cartItem.product.title}</h3>
                  <div className="text-sm font-medium text-gray-600">
                    Rs. {cartItem.product.price}
                  </div>
                </div>
                {/* <p className="text-sm text-gray-500 mt-1">Size: {item.variantId}</p> */}
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-500">Quantity: {cartItem.product.quantity}</span>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => removeFromCart(cartItem.product)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center justify-between font-semibold text-lg">
          <span>Subtotal</span>
          <span>Rs. {countTotalPrice()}</span>
        </div>
        <div className="flex justify-between mt-4">
          <Link href="/cart">
            <button className="rounded-md py-2 px-4 border border-gray-300 hover:bg-gray-100 transition">
              View Cart
            </button>
          </Link>
          <Link href="/checkout">
            <button className="rounded-md py-2 px-4 bg-black text-white hover:bg-gray-800 transition">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cartbar;