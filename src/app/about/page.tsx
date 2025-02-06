
import Image from "next/image";

import { IoIosArrowForward } from "react-icons/io";

export default function About() {
    return (
        <div>
            <section
                style={{ backgroundImage: "url(/shop1.png)" }}
                className="flex flex-col justify-center items-center h-[300px] mt-2 text-center bg-cover bg-center lg:px-15">
                <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold">About Us</h1>
                <span className="mt-2 flex items-center justify-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex items-center">
                        Home
                        <IoIosArrowForward className="mx-2 text-lg sm:text-xl lg:text-2xl size-8" />
                        About Us
                    </p>
                </span>
            </section>
            <section className="bg-orange-100 py-10 px-14">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <Image src="/Group 185.png" alt="" width={600} height={400} className="w-full max-w-[750px] h-auto" />
                    <div>
                        <h2 className="text-3xl sm:text-xl md:text-3xl lg:text-3xl font-bold mb-2">Our Core Mission</h2>
                        <p className="text-xl sm:text-xl md:text-xl lg:text-2xl">Welcome to <span className="text-2xl font-semibold">FurniSphere</span>, where craftsmanship meets creativity to redefine the art of furnishing your spaces. Established in <span className="text-xl font-semibold">2024</span>, we take pride in offering a diverse range of elegant, durable, and stylish furniture tailored to meet the evolving tastes of our customers.Our dedicated team of artisans, designers, and customer service professionals works tirelessly to ensure your shopping experience is seamless and enjoyable. Whether you’re looking for a cozy sofa, a sturdy dining table, or bespoke solutions for your space, we are here to bring your vision to life.</p>
                    </div>
                </div>
            </section>
            <section className="bg-violet-400 mt-2 mb-2 p-16 text-center">
                <h2 className="text-3xl sm:text-xl md:text-3xl lg:text-3xl font-bold">Get to Know Our Values</h2>
                    <div>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                            <div className="bg-[#94c9f5] shadow rounded-lg p-10">
                                <h3 className="text-2xl font-semibold mb-2">Quality First</h3>
                                <p className="text-black text-xl"> We prioritize quality in every product we design, ensuring durability and aesthetic appeal that stands the test of time.</p>
                            </div>
                            <div className="bg-[#94c9f5] shadow rounded-lg  p-10">
                                <h3 className="text-2xl font-semibold mb-2">Customer Centric Approach</h3>
                                <p className="text-black text-xl"> Your satisfaction is our success. We strive to exceed your expectations with personalized service and unparalleled support.</p>
                            </div>
                            <div className="bg-[#94c9f5] shadow rounded-lg p-10">
                                <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
                                <p className="text-black text-xl"> Transparency, honesty, and fairness guide our business practices, ensuring trust and long-lasting relationships with our customers.</p>
                            </div>
                        </div>
                    </div>
            </section>
            <div className="bg-[#f3d2ef] w-full px-2 py-8 mt-1 mb-1">
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