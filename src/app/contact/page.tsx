
import { IoIosArrowForward } from "react-icons/io";



export default function Contact() {
    return (
        <div>
            <section
                style={{ backgroundImage: "url(/shop1.png)" }}
                className="flex flex-col justify-center items-center h-[500px] text-center bg-cover bg-center lg:px-15">
                <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold">Contact</h1>
                <span className="mt-2 flex items-center justify-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex items-center">
                        Home
                        <IoIosArrowForward className="mx-2 text-lg sm:text-xl lg:text-2xl size-8" />
                        Contact
                    </p>
                </span>
            </section>
            <div className="bg-gray-300 mx-auto py-12 px-4">
          <h1 className="text-center text-3xl font-semibold text-gray-800">Get In Touch With Us</h1>
          <p className="text-center text-gray-600 mt-2 mb-8">
            For More Information About Our Products & Services, Please Feel Free To Drop Us A Message.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="ml-4">
                <p className="font-semibold">Address</p>
                <p>123 Fifth Avenue, New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="ml-4">
                <p className="font-semibold">Phone</p>
                <p>+1 234 456 6789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="ml-4">
                <p className="font-semibold">Working Time</p>
                <p>Monday-Friday: 9:00 - 20:00</p>
                <p>Saturday-Sunday: 9:00 - 15:00</p>
              </div>
            </div>
          </div>
          <form className="mt-8 space-y-6">
            <label className="block mb-1 text-gray-800">Your Good Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              <label className="block mb-1 text-gray-800">Your Email</label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            <label className="block mb-1 text-gray-800">Subject</label>
            <input
              type="text"
              placeholder="Subject (This is Optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            <label className="block mb-1 text-gray-800">Message</label>
            <textarea
              placeholder="Hi! I wanna ask about...."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" rows={5}>
              </textarea>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Submit
            </button>
          </form>
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
    )
}

