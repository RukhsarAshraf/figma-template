import { IoIosArrowForward } from "react-icons/io"

export default function Account() {
    return (
        <>
        <div>
            <section
                style={{ backgroundImage: "url(/shop1.png)" }}
                className="flex flex-col justify-center items-center h-[300px] mt-2 text-center bg-cover bg-center lg:px-15">
                <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">My Account</h1>
                <span className="mt-2 flex items-center justify-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex items-center">
                        Home
                        <IoIosArrowForward className="mx-2 text-lg sm:text-xl lg:text-2xl size-8" />
                        My account
                    </p>
                </span>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 p-6">
                <form className="mt-8 space-y-6">
                    <label className="block mb-2 sm:text-xl text-2xl text-black font-bold">Log In</label>
                    <p>Username or email address</p>
                    <input
                        type="text"
                        placeholder=""
                        className="w-[70%] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <label className="block mb-1 text-black">Password</label>
                    <input
                        type="text"
                        placeholder=""
                        className="w-[70%] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <div>
                        <button className="inline-block border mt-14 px-6 py-2 text-2xl text-center font-semibold rounded hover:bg-blue-500 text-black border-black">
                            Log In
                        </button><span className="m-2">Lost your password?</span>
                    </div>
                </form>
                <form className="mt-8 space-y-6">
                    <label className="block mb-2 sm:text-xl text-2xl text-black font-bold">Register</label>
                    <p>Email Address</p>
                    <input
                        type="text"
                        placeholder=""
                        className="w-[70%] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <p className="w-[70%] mt-4 text-gray-600">A link to set a new password will be sent to your email address.</p>
                    <p className="w-[70%] mt-2 text-gray-600">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="text-black"> privacy policy.</span></p>
                    <div>
                        <button className="inline-block border mt-2 px-6 py-2 text-2xl text-center font-semibold rounded hover:bg-blue-500 text-black border-black">
                            Register
                        </button>
                    </div>
                </form>
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
    </>
    );
};
