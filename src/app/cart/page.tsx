import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const CartPage: React.FC = () => {
  return (
    <div>
      <section
        style={{ backgroundImage: "url(/shop1.png)" }}
        className="flex flex-col justify-center items-center h-[500px] text-center bg-cover bg-center lg:px-15"
      >
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold">Cart</h1>
        <span className="mt-2 flex items-center justify-center">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex items-center">
            Home
            <IoIosArrowForward className="mx-2 text-lg sm:text-xl lg:text-2xl size-8" />
            Cart
          </p>
        </span>
      </section>
      <div className="p-12">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="bg-[#FFF9E5] shadow rounded-lg p-3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Product</h2>
                <h2 className="text-xl font-semibold">Price</h2>
              </div>
              <div className="space-y-4">
                I<div className="w-full lg:w-[50%] flex justify-center">
                  <Image src="/Asgaard8.png" alt="Asgaard Sofa" width={0} height={0} className="w-[10px] h-[5px]"/>
                </div>
                <div className="flex justify-between items-center">
                  <span>Asgaard Sofa</span>
                  <span>Rs.250,000.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FFF9E5] shadow rounded-lg p-6 mt-0">
            <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs.250,000.00</span>
              </div>
              <div className="flex justify-between">
                <span>Total</span>
                <span>Rs.250,000.00</span>
              </div>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-lg mt-4">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f3d2ef] w-full px-2 py-10">
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
};

export default CartPage;