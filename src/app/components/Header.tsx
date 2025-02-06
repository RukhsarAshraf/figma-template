"use client";
import Link from "next/link";
import Image from "next/image";
import { BsFillPersonFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { FcMenu } from "react-icons/fc";
import { useState } from "react";
import Wishlistpop from "../components/Wishpop";
import { useCart } from "../context/CartProvider";
import CartIcon from "./CartIcon";
// import { useWishlist } from "../context/WishListProvider";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    // const [cartItemsCount, setCartItemsCount] = useState(0);
    const {countAllItems} = useCart();
    const cartItems = countAllItems();
    // const { wishlist } = useWishlist();

    // useEffect(() => {
    //     const storedCart = localStorage.getItem("cart");
    //     if (storedCart) {
    //         const cart = JSON.parse(storedCart);
    //         const totalItems = cart.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0);
    //         setCartItemsCount(totalItems);
    //     }
    // }, []);

    return (
        <header className="bg-[#FBEBB5] text-black shadow-lg">
            <div className="container mt-1 flex justify-between flex-wrap flex-col md:flex-row items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-2 flex-1 bg-[#FBEBB5] text-black text-3xl font-bold font-serif">
                    <Image src="/M.png" alt="FurniSphere Logo" width={100} height={100} />
                    <h3 className="text-xl md:text-3xl font-extrabold">FurniSphere</h3>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="p-2 border border-white rounded hover:bg-purple-200 transition duration-300"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <FcMenu className="text-white" />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-wrap justify-center gap-6">
                    <Link href="/" className="hover:text-gray-600 text-xl md:text-2xl active:scale-90 transition-transform">
                        Home
                    </Link>
                    <Link href="/shop" className="hover:text-gray-600 text-xl md:text-2xl active:scale-90 transition-transform">
                        Shop
                    </Link>
                    <Link href="/about" className="hover:text-gray-600 text-xl md:text-2xl active:scale-90 transition-transform">
                        About
                    </Link>
                    <Link href="/blog" className="hover:text-gray-600 text-xl md:text-2xl active:scale-90 transition-transform">
                        Blog
                    </Link>
                    <Link href="/contact" className="hover:text-gray-600 text-xl md:text-2xl active:scale-90 transition-transform">
                        Contact
                    </Link>
                </nav>

                {/* View Options for Mobile and Desktop */}
                <div className="hidden  md:flex items-center ml-6 gap-4">
                    <Link href="/account">
                        <BsFillPersonFill className="hover:text-gray-600 text-xl lg:text-3xl cursor-pointer" />
                    </Link>
                    <Link href="/search"> 
                    <IoSearch className="hover:text-gray-600 text-xl lg:text-3xl cursor-pointer" />
                    </Link>
                    {/* <FaRegHeart  /> */}
                    <Wishlistpop />
                   
                    <div>
                       <CartIcon />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="md:hidden bg-[#FBEBB5] shadow-lg rounded w-full mt-2">
                    <li className="text-[4vw] hover:bg-purple-700 transition duration-300">
                        <Link href="/" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li className="text-[4vw] hover:bg-purple-700 transition duration-300">
                        <Link href="/shop" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>
                            Shop
                        </Link>
                    </li>
                    <li className="text-[4vw] hover:bg-purple-700 transition duration-300">
                        <Link href="/about" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li className="text-[4vw] hover:bg-purple-700 transition duration-300">
                        <Link href="/blog" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>
                        Blog
                    </Link>
                    </li>
                    <li className="text-[4vw] hover:bg-purple-700 transition duration-300">
                        <Link href="/contact" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>
                    </li>
                    <li className="text-[4vw] hover:bg-purple-700 transition duration-300">
                    <Link href="/account" onClick={() => setMenuOpen(false)} className="block px-4 py-2">
                        <BsFillPersonFill className="hover:text-gray-600 text-xl lg:text-3xl cursor-pointer" />
                    </Link>
                    </li>
                    <li className="text-[4vw] hover:bg-purple-700 transition duration-300">
                    <Link href="/search" onClick={() => setMenuOpen(false)} className="block px-4 py-2"> 
                    <IoSearch className="hover:text-gray-600 text-xl lg:text-3xl cursor-pointer" />
                    </Link>
                    </li>
                    <li className="text-[4vw] hover:bg-purple-700 transition duration-300">
                        <Link href="/wish" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>
                            <Wishlistpop />
                        </Link>
                    </li>
                    <li className="text-[4vw] hover:bg-purple-700 transition duration-300">
                    <div className="relative">
                        <Link href="/cart" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>
                        <div className="relative">
                            <GrCart className="hover:text-gray-600 text-xl lg:text-3xl cursor-pointer" />
                           
                            {cartItems > 0 && (
                                <span className="absolute -top-2 left-3 text-xs bg-red-500 text-white rounded-full px-2 py-1">
                                    {cartItems}
                                </span>
                            )}
                            </div>
                        </Link>
                    </div>
                    </li>
                </ul>
            )}
        </header>
    );
}
