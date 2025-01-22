import Link from "next/link";
import Image from "next/image";
import { BsFillPersonFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";

export default function Header() {
    return (
        <>
            <div className="overflow-x-hidden">
                <header className="">
                    <div className="flex flex-col lg:flex-row justify-evenly items-center gap-4 mt-2 bg-[#FBEBB5]">
                        {/* Logo Section */}
                        <div className="flex items-center">
                            <Image src="/M.png" alt="FurniSphere Logo" width={100} height={350} />
                            <h3 className="text-xl md:text-3xl font-extrabold">FurniSphere</h3>
                        </div>
                        {/* Navigation Section */}
                        <nav>
                            <div className="sm:hidden md:flex flex-wrap justify-center gap-6">
                                <Link href="/" className="hover:text-gray-600 text-xl  md:text-2xl font-semibold active:scale-90 transition-transform">
                                    Home
                                </Link>
                                <Link href="shop" className="hover:text-gray-600 text-xl md:text-2xl font-semibold active:scale-90 transition-transform">
                                    Shop
                                </Link>
                                <Link href="about" className="hover:text-gray-600 text-xl md:text-2xl font-semibold active:scale-90 transition-transform">
                                    About
                                </Link>
                                <Link href="contact" className="hover:text-gray-600 text-xl md:text-2xl font-semibold active:scale-90 transition-transform">
                                    Contact
                                </Link>
                            </div>
                        </nav>

                        {/* View Options */}
                        <div className="sm:hidden md:flex items-center gap-4">
                            <Link href="/account">
                                <BsFillPersonFill className="hover:text-gray-600 text-xl lg:text-3xl cursor-pointer"/>
                            </Link>
                            <IoSearch className="hover:text-gray-600 text-xl lg:text-3xl cursor-pointer" />
                            <FaRegHeart className="hover:text-gray-600 text-xl lg:text-3xl cursor-pointer" />
                            <Link href="/cart">
                            <GrCart className="hover:text-gray-600 text-xl lg:text-3xl cursor-pointer" />
                            </Link>
                        </div>
                        {/* <button className="md:hidden text-gray-800">☰</button> */}
                    </div>
                </header>
            </div>
        </>
    )
}