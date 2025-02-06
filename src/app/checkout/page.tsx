"use client";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useCart } from "../context/CartProvider"; // Use CartContext to get cart data

const CheckoutPage = () => {
  // Cart se items aur details ko fetch karna
  const { items: cartItems, subTotal, withTax, shipping, countTotalPrice } = useCart();

  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    address: '',
    city: '',
    province: '',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<string>('bank'); // State to track payment method
  const [notification, setNotification] = useState<string>(''); // State for notification

  // Input field ki changes handle karna
  interface UserData {
    firstName: string;
    lastName: string;
    company?: string;
    country: string;
    address: string;
    city: string;
    province: string;
    zipCode: string;
    phone: string;
    email: string;
    additionalInfo?: string;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData: UserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  // Payment method change handler
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  // Form submit hone par data process karna
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Show order confirmation notification
    setNotification("Your order has been placed successfully!");

    // Hide the notification after 5 seconds
    setTimeout(() => {
      setNotification(''); // Hide the notification after 3 seconds
    }, 5000);
  };


  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    console.log("Order confirmed:", userData);
    console.log("Cart details:", cartItems);
    console.log("Selected Payment Method:", paymentMethod);

    // Show order confirmation alert
    alert("Your order has been placed successfully!");

    // Hide the notification after 5 seconds
    setTimeout(() => {
      setNotification(''); // Hide the notification after 5 seconds
    }, 5000);
  };

  return (
    <>
      <section
        style={{ backgroundImage: "url(/shop1.png)" }}
        className="flex flex-col justify-center items-center h-[300px] mt-2 text-center bg-cover bg-center lg:px-15"
      >
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold">Checkout</h1>
        <span className="mt-2 flex items-center justify-center">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex items-center">
            Home
            <IoIosArrowForward className="mx-2 text-lg sm:text-xl lg:text-2xl size-8" />
            Checkout
          </p>
        </span>
      </section>

      <div className="m-10">
        <div className="p-6 md:p-10 w-full flex flex-col md:flex-row">
          {/* Billing Details */}
          <div className="w-[fit] md:w-2/3">
            <h2 className="text-3xl font-semibold mb-6">Billing details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <label className="block mb-2 sm:text-xl text-xl text-black">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="border p-3 rounded w-[70%] md:col-span-2"
                name="firstName"
                value={userData.firstName}
                onChange={handleInputChange}
                required
              />
              <label className="block mb-2 sm:text-xl text-xl text-black">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="border p-3 rounded w-[70%] md:col-span-2"
                name="lastName"
                value={userData.lastName}
                onChange={handleInputChange}
                required
              />
              <label className="block mb-2 sm:text-xl text-xl text-black">Company Name</label>
              <input
                type="text"
                placeholder="Company Name (Optional)"
                className="border p-3 rounded w-[70%] md:col-span-2"
                name="company"
                value={userData.company}
                onChange={handleInputChange}
              />
              <label className="block mb-2 sm:text-xl text-xl text-black">Country / Region</label>
              <select
                className="border p-3 rounded w-[70%] md:col-span-2"
                name="country"
                value={userData.country}
                onChange={handleInputChange}
                required
              >
                <option>Country / Region</option>
                <option>Pakistan</option>
                <option>Turkey</option>
                <option>United Kingdom</option>
              </select>
              <label className="block mb-2 sm:text-xl text-xl text-black">Address</label>
              <input
                type="text"
                placeholder="Street Address"
                className="border p-3 rounded w-[70%] md:col-span-2"
                name="address"
                value={userData.address}
                onChange={handleInputChange}
                required
              />
              <label className="block mb-2 sm:text-xl text-xl text-black">Town / City</label>
              <input
                type="text"
                placeholder="Town / City"
                className="border p-3 rounded w-[70%] md:col-span-2"
                name="city"
                value={userData.city}
                onChange={handleInputChange}
                required
              />
              <label className="block mb-2 sm:text-xl text-xl text-black">Province</label>
              <select
                className="border p-3 rounded w-[70%] md:col-span-2"
                name="province"
                value={userData.province}
                onChange={handleInputChange}
                required
              >
                <option>Province</option>
                <option>Sindh</option>
                <option>Punjab</option>
                <option>KPK</option>
              </select>
              <label className="block mb-2 sm:text-xl text-xl text-black">ZIP Code</label>
              <input
                type="text"
                placeholder="ZIP Code"
                className="border p-3 rounded w-[70%] md:col-span-2"
                name="zipCode"
                value={userData.zipCode}
                onChange={handleInputChange}
                required
              />
              <label className="block mb-2 sm:text-xl text-xl text-black">Phone</label>
              <input
                type="text"
                placeholder="Phone"
                className="border p-3 rounded w-[70%] md:col-span-2"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                required
              />
              <label className="block mb-2 sm:text-xl text-xl text-black">Email</label>
              <input
                type="email"
                placeholder="Email Address"
                className="border p-3 rounded w-[70%] md:col-span-2"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                required
              />
              <label className="block mb-2 sm:text-xl text-xl text-black">Additional Info</label>
              <textarea
                placeholder="Additional Information"
                className="border p-3 rounded w-[70%] md:col-span-2"
                name="additionalInfo"
                value={userData.additionalInfo}
                onChange={handleInputChange}
              />
            </form>
          </div>

          {/* Product and Summary Details */}
          <div className="w-[fit] h-[30%] md:w-1/3 p-6 rounded-lg shadow-inner mt-6">
            <h2 className="text-xl font-semibold mb-4">Product</h2>
            {cartItems.map((cartItem) => (
              <div key={cartItem.product._id} className="flex justify-between border-b pb-2 mb-2">
                <span>{cartItem.product.title} x {cartItem.count}</span>
                <span>${cartItem.product.price}</span>
              </div>
            ))}
            <div className="flex justify-between border-b pb-2 mb-2">
              <span>Subtotal</span>
              <span>${subTotal()}</span>
            </div>
            <div className="flex justify-between border-b pb-2 mb-2">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between border-b pb-2 mb-2">
              <span>Tax</span>
              <span>${withTax()}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${countTotalPrice()}</span>
            </div>

            {/* Payment Methods */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              <div className="border p-3 rounded mb-2">
                <input
                  type="radio"
                  id="bank"
                  name="payment"
                  value="bank"
                  className="mr-2"
                  checked={paymentMethod === 'bank'}
                  onChange={handlePaymentChange}
                />
                <label htmlFor="bank">Direct Bank Transfer</label>
              </div>
              <div className="border p-3 rounded mb-2">
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  value="cod"
                  className="mr-2"
                  checked={paymentMethod === 'cod'}
                  onChange={handlePaymentChange}
                />
                <label htmlFor="cod">Cash on Delivery</label>
              </div>
              <div className="border p-3 rounded">
                <input
                  type="radio"
                  id="paypal"
                  name="payment"
                  value="paypal"
                  className="mr-2"
                  checked={paymentMethod === 'paypal'}
                  onChange={handlePaymentChange}
                />
                <label htmlFor="paypal">PayPal</label>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="text-blue-500 underline">privacy policy</span>.</p>
            <button
              onClick={handleConfirm}
              className="w-full py-3 mt-6 bg-[#f1d67c] text-black text-xl rounded-md hover:bg-[#98dfe9] transition-colors duration-300"
            >
              Place Order
            </button>
            {/* Confirmation Message */}
            {notification && (
              <div className="mt-6 text-center text-2xl text-blue-500">
                {notification}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
