"use client";

import React, { useState } from "react";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartProvider";
import { urlForImage } from "@/sanity/lib/image";

// type CartItem = {
//   _id: string;
//   name: string;
//   price: string;
//   image: string;
//   quantity: number;
// };

export default function Cart() {

  const [] = useState(true);
  const {items: cartItems, addToCart, countAllItems, removeFromCart, subTotal, withTax, shipping, countTotalPrice} = useCart();

  console.log(subTotal());
  // useEffect(() => {
  //   const storedCart = localStorage.getItem("cart");
  //   if (storedCart) {
  //     setCart(JSON.parse(storedCart));
  //   }
  //   setIsLoading(false);
  // }, []);

  // const handleRemoveItem = (_id: string) => {
  //   const updatedCart = cart.filter(item => item._id !== _id);
  //   setCart(updatedCart);
  //   if (updatedCart.length > 0) {
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   } else {
  //     localStorage.removeItem("cart");
  //   }
  // };

  // const handleUpdateQuantity = (_id: string, newQuantity: number) => {
  //   if (newQuantity < 1) return;
  //   const updatedCart = cart.map(item =>
  //     item._id === _id ? { ...item, quantity: newQuantity } : item
  //   );
  //   setCart(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

  const handleCheckout = () => {
    window.location.href = "/checkout";
  };

  const handleContinueShopping = () => {
    window.location.href = "/";
  };

  // const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  // const subtotal = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  // const shipping = 10.00; // Example shipping cost
  // const tax = subtotal * 0.05; // Example tax rate (5%)
  // const totalPrice = subtotal + shipping + tax;

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center h-96">
  //       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  //     </div>
  //   );
  // }

  return (
    <div>
      {/* <section
        style={{ backgroundImage: "url(/shop1.png)" }}
        className="flex flex-col justify-center items-center h-[400px] text-center bg-cover bg-center lg:px-15">
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold">Cart</h1>
        <span className="mt-2 flex items-center justify-center">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex items-center">
            Home
            <IoIosArrowForward className="mx-2 text-lg sm:text-xl lg:text-2xl size-8" />
            Cart
          </p>
        </span>
      </section> */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-8">
          <ShoppingBag className="h-6 w-6 text-blue-600"/>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <span className="text-sm text-gray-500 ml-2">({countAllItems()} items)</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm text-center py-16">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven&apos;t added anything to your cart yet</p>
            <button
              onClick={handleContinueShopping}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((cartItem) => (
                  <div key={cartItem.product._id} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-start gap-4">
                      <div className="relative w-24 h-24 flex-shrink-0 bg-[#FBEBB5]">
                        <Image
                          src={urlForImage(cartItem.product.image).url() || "/api/placeholder/96/96"}
                          width={100}
                          height={100}
                          alt={cartItem.product.title} 
                          className="w-[fit] h-[fit] object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-lg text-gray-900">{cartItem.product.title}</h3>
                          <button
                            onClick={() =>removeFromCart(cartItem.product)}
                            className="text-red-500 hover:text-red-700 transition-colors bg-[#FBEBB5]"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="text-lg font-semibold text-blue-600">${cartItem.product.price}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => addToCart(cartItem.product, -1 )}
                            className="p-1 rounded-full hover:bg-[#dfbe51] bg-[#FBEBB5]"
                            disabled={cartItem.product.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">{cartItem.count}</span>
                          <button
                            onClick={() => addToCart(cartItem.product, 1)}
                            className="p-1 rounded-full hover:bg-[#dfbe51] bg-[#FBEBB5]"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-[#FBEBB5] rounded-lg shadow-sm p-6 sticky top-4">
                <h3 className="text-2xl text-center font-semibold mb-4">Cart Totals</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${subTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">${shipping}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">${withTax()}</span>
                  </div>
                  <div className="h-px bg-gray-200 my-4"></div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-blue-600">${countTotalPrice()}</span>
                  </div>
                </div>

                <Link href="/checkout"
                  onClick={handleCheckout}
                  className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={handleContinueShopping}
                  className="w-full mt-3 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition duration-200 flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#f3d2ef] w-full px-2 py-10 mt-1 mb-1">
        <div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Free Delivery */}
            <div className="bg-[#f3d2ef] py-8 border-t px-10">
              <h3 className="text-2xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600 text-xl">For all orders over $50, consectetur adipiscing elit.</p>
            </div>
            {/* 90 Days Return */}
            <div className="bg-[#f3d2ef] py-8 border-t px-10">
              <h3 className="text-2xl font-semibold mb-2">90 Days Return</h3>
              <p className="text-gray-600 text-xl">If goods have problems, consectetur adipiscing elit.</p>
            </div>
            {/* Secure Payment */}
            <div className="bg-[#f3d2ef] py-8 border-t px-10">
              <h3 className="text-2xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-xl">100% secure payment, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}