import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BiGridSmall } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export default function Shop() {
    return (
        <div>
            <section
                style={{ backgroundImage: "url(/shop1.png)" }}
                className="flex flex-col justify-center items-center h-[500px] text-center bg-cover bg-center lg:px-15"
            >
                <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold">Shop</h1>
                <span className="mt-2 flex items-center justify-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex items-center">
                        Home
                        <IoIosArrowForward className="mx-2 text-lg sm:text-xl lg:text-2xl size-8" />
                        Shop
                    </p>
                </span>
            </section>
            <div>
                <div className="w-full bg-[#FAF4F4] border rounded-lg shadow-md p-8 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Filter Section */}
                    <div className="flex items-center gap-2">
                        <HiAdjustmentsHorizontal className="text-lg sm:text-xl lg:text-2xl" />
                        <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">Filter</span>
                    </div>

                    {/* View Options */}
                    <div className="flex items-center gap-4">
                        <BiGridSmall className="text-lg sm:text-xl lg:text-2xl cursor-pointer" />
                        <BsViewList className="text-lg sm:text-xl lg:text-2xl cursor-pointer" />
                    </div>

                    {/* Divider for larger screens */}
                    <span className="hidden sm:block border-l-2 border-gray-400 h-14 mx-4"></span>

                    {/* Results and Controls */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                        <p className="text-xl sm:text-base md:text-lg text-gray-600">
                            Showing <span className="font-semibold">1-16</span> of <span className="font-semibold">32</span>results
                        </p>
                        <div className="flex items-center gap-4">
                            <label htmlFor="show" className="text-xl sm:text-base md:text-lg text-gray-600">
                                Show
                            </label>
                            <select
                                id="show"
                                className="border border-gray-300 rounded-lg p-2 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="16">16</option>
                                <option value="32">32</option>
                                <option value="48">48</option>
                            </select>
                            <label htmlFor="sort" className="text-xl sm:text-base md:text-lg text-gray-600">
                                Sort by
                            </label>
                            <select
                                id="sort"
                                className="border border-gray-300 rounded-lg p-2 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="default">Default</option>
                                <option value="popularity">Popularity</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <section className="mx-auto mt-4 px-4 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Card 1 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/img4.png"
                            alt="Trenton modular sofa"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Trenton modular sofa_3</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/chair5.png"
                            alt="Granite dining table"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Granite dining table with chair</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/Outdoortble6.png"
                            alt="Outdoor bar table"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Outdoor bar table and stool</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Card 4 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/mirror7.png"
                            alt="Plain console with mirror"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Plain console with teak mirror</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>{/* Card 1 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/img4.png"
                            alt="Trenton modular sofa"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Trenton modular sofa_3</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/chair5.png"
                            alt="Granite dining table"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Granite dining table with chair</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/Outdoortble6.png"
                            alt="Outdoor bar table"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Outdoor bar table and stool</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Card 4 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/mirror7.png"
                            alt="Plain console with mirror"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Plain console with teak mirror</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>
                    {/* Card 1 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/img4.png"
                            alt="Trenton modular sofa"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Trenton modular sofa_3</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/chair5.png"
                            alt="Granite dining table"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Granite dining table with chair</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/Outdoortble6.png"
                            alt="Outdoor bar table"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Outdoor bar table and stool</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Card 4 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/mirror7.png"
                            alt="Plain console with mirror"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Plain console with teak mirror</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>
                    {/* Card 1 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/img4.png"
                            alt="Trenton modular sofa"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Trenton modular sofa_3</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/chair5.png"
                            alt="Granite dining table"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Granite dining table with chair</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/Outdoortble6.png"
                            alt="Outdoor bar table"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Outdoor bar table and stool</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Card 4 */}
                    <div className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md">
                        <Image
                            src="/mirror7.png"
                            alt="Plain console with mirror"
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">Plain console with teak mirror</h3>
                        <p className="text-sm sm:text-base text-gray-700">$ 25,000</p>
                        <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center space-x-4 mt-20 mb-20">
                    <button className="px-6 py-4 rounded-md border-none text-sm bg-amber-100">1</button>
                    <button className="px-6 py-4 rounded-md border-none text-sm bg-amber-100">2</button>
                    <button className="px-6 py-4 rounded-md border-none text-sm bg-amber-100">3</button>
                    <button className="px-6 py-4 rounded-md border-none text-sm bg-amber-100">Next</button>
                </div>
            </section>
            <div className="bg-[#f3d2ef] w-full px-2 py-8 mt-20">
                <div >
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