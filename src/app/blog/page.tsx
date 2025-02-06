'use client';

import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

export default function BlogPage() {
    return (
        <div>
            <section
                style={{ backgroundImage: "url(/shop1.png)" }}
                className="flex flex-col justify-center items-center h-[300px] mt-2 text-center bg-cover bg-center lg:px-15">
                <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold">Blog</h1>
                <span className="mt-2 flex items-center justify-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex items-center">
                        Home
                        <IoIosArrowForward className="mx-2 text-lg sm:text-xl lg:text-2xl size-8" />
                        Blog
                    </p>
                </span>
            </section>
            <div className=" grid grid-cols-1 md:grid-cols-2 ml-6 mt-4 p-2 pl-8 pr-8 ">
                <div className="md:flex-[3]">
                    {/* Blog Post 1 */}
                    <div className="flex flex-col gap-6 mt-20"> 
                        {/* Image Section */}
                        <div>
                            <Image src="/Post1.png" alt="Blog 3" width={600} height={400} />
                        </div>

                        {/* Content Section */}
                        <div className="bg-white overflow-hidden">
                            {/* Navigation Info */}
                            <ul className="flex gap-6 text-sm text-gray-600">
                                <li className="flex gap-2">
                                    <Image src="/admin.webp" alt="Admin Icon" width={20} height={20} />
                                    <span>Admin</span>
                                </li>
                                <li className="flex gap-2">
                                    <Image src="/calendar.webp" alt="Calendar Icon" width={20} height={20} />
                                    <span>24 Dec 2024</span>
                                </li>
                                <li className="flex gap-2">
                                    <Image src="/wood.webp" alt="Category Icon" width={20} height={20} />
                                    <span>Wood</span>
                                </li>
                            </ul>
                            <h2 className="text-xl font-semibold mt-4">Handmade pieces that took time to make</h2>
                            <p className="text-gray-600 text-[13px] md:text-[15px] mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt dolorem totam mollitia dicta voluptas iste sed architecto, quo recusandae praesentium? Veniam, culpa. Itaque iste eaque, at dolorem voluptates sequi ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempora quo nostrum. Sed sint vel quos dolorem iste adipisci officia dicta eius hic. Aperiam minima doloribus odit fuga officia ratione!</p>
                            <Link href="/about">
                                <button className="border-b-2 w-28 border-black mt-4 px-4 py-2 text-xl sm:text-base bg-white text-black">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* Blog Posts 2 */}
                    <div className="flex flex-col gap-6 mt-20">
                        {/* Image Section */}
                        <div>
                            <Image src="/Post2.png" alt="Blog 3" width={600} height={400}/>
                        </div>

                        {/* Content Section */}
                        <div className="bg-white border-hidden overflow-hidden">
                            {/* Navigation Info */}
                            <ul className="flex gap-6 text-sm text-gray-600">
                                <li className="flex gap-2">
                                    <Image src="/admin.webp" alt="Admin Icon" width={20} height={20} />
                                    <span>Admin</span>
                                </li>
                                <li className="flex gap-2">
                                    <Image src="/calendar.webp" alt="Calendar Icon" width={20} height={20} />
                                    <span>24 Dec 2024</span>
                                </li>
                                <li className="flex gap-2">
                                    <Image src="/wood.webp" alt="Category Icon" width={20} height={20} />
                                    <span>Handmade</span>
                                </li>
                            </ul>
                            <h2 className="text-xl font-semibold mt-4">Handmade pieces that took time to make</h2>
                            <p className="text-gray-600 text-[13px] md:text-[15px] mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt dolorem totam mollitia dicta voluptas iste sed architecto, quo recusandae praesentium? Veniam, culpa. Itaque iste eaque, at dolorem voluptates sequi ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempora quo nostrum. Sed sint vel quos dolorem iste adipisci officia dicta eius hic. Aperiam minima doloribus odit fuga officia ratione!</p>
                            <Link href="/about">
                                <button className="border-b-2 w-28 border-black mt-4 px-4 py-2 text-xl sm:text-base bg-white text-black">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* Blog Post 3 */}
                    <div className="flex flex-col gap-6 mt-20 mb-20">
                        {/* Image Section */}
                        <div>
                            <Image src="/Post3.png" alt="Blog 3" width={600} height={400}/>
                        </div>

                        {/* Content Section */}
                        <div className="bg-white border-hidden overflow-hidden">
                            {/* Navigation Info */}
                            <ul className="flex gap-6 text-sm text-gray-600">
                                <li className="flex gap-2">
                                    <Image src="/admin.webp" alt="Admin Icon" width={20} height={20} />
                                    <span>Admin</span>
                                </li>
                                <li className="flex gap-2">
                                    <Image src="/calendar.webp" alt="Calendar Icon" width={20} height={20} />
                                    <span>24 Dec 2024</span>
                                </li>
                                <li className="flex gap-2">
                                    <Image src="/wood.webp" alt="Category Icon" width={20} height={20} />
                                    <span>Wood</span>
                                </li>
                            </ul>
                            <h2 className="text-xl font-semibold mt-4">Handmade pieces that took time to make</h2>
                            <p className="text-gray-600 text-[13px] md:text-[15px] mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt dolorem totam mollitia dicta voluptas iste sed architecto, quo recusandae praesentium? Veniam, culpa. Itaque iste eaque, at dolorem voluptates sequi ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempora quo nostrum. Sed sint vel quos dolorem iste adipisci officia dicta eius hic. Aperiam minima doloribus odit fuga officia ratione!</p>
                            <Link href="/about">
                                <button className="border-b-2 w-28 border-black mt-4 px-4 py-2 text-xl sm:text-base bg-white text-black">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Sidebar */}
                <div>
                    <div className="border-hidden pl-16 overflow-hidden w-[70%] mt-20 p-3">
                        <h3 className="text-2xl font-semibold">Categories</h3>
                        <ul className="mt-2 space-y-2">
                            <li className="text-black text-xl">Crafts</li>
                            <li className="text-black text-xl">Design</li>
                            <li className="text-black text-xl">Handmade</li>
                            <li className="text-black text-xl">Interior</li>
                            <li className="text-black text-xl">Wood</li>
                        </ul>

                        {/* Recent Posts */}
                        <h3 className="text-2xl font-semibold mt-12">Recent Posts</h3>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center space-x-4">
                                <Image src="/Blog1.png" alt="Recent Post 1" width={60} height={60} className="border-hidden" />
                                <p className="text-black">Going all-in with millennial design</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Image src="/Blog2.png" alt="Recent Post 2" width={60} height={60} className="border-hidden" />
                                <p className="text-black">Exploring new ways of decorating</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Image src="/Blog3.png" alt="Recent Post 3" width={60} height={60} className="border-hidden" />
                                <p className="text-black">Handmade pieces that took time to made</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Image src="/Blog4.png" alt="Recent Post 3" width={60} height={60} className="border-hidden" />
                                <p className="text-black">Modern home in Milan</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Image src="/Blog5.png" alt="Recent Post 3" width={60} height={60} className="border-hidden" />
                                <p className="text-black">Colorful office redesign</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}