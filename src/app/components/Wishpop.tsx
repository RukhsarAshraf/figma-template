"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import { useWishlist } from "../context/WishListProvider";


export default function WishlistPopup() {
    const { wishlist } = useWishlist();
    const [wishlistOpen, setWishlistOpen] = useState(false);

    
    return (
        <div className="relative">
            {/* Wishlist Icon */}
            <button onClick={() => setWishlistOpen(!wishlistOpen)} className="relative">
                <FaRegHeart className="hover:text-gray-600 text-xl lg:text-3xl cursor-pointer" />
                {wishlist.length > 0 && (
                    <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2 py-1">
                        {wishlist.length}
                    </span>
                )}
            </button>

            {/* Wishlist Popup */}
            {wishlistOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-10">
                    <h3 className="text-md font-semibold mb-2">Wishlist Items</h3>
                    {wishlist.length > 0 ? (
                        <ul>
                            {wishlist.map((item, index) => (
                                <li key={index} className="flex items-center gap-2 border-b pb-2 mb-2">
                                    <Image src={String(item.image)} alt={item.title} width={40} height={40} className="rounded"/>
                                    <span className="text-sm">{item.title}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-500">No items in wishlist</p>
                    )}
                    <Link href="/wish" className="block mt-2 text-blue-500 hover:underline">
                        View Wishlist
                    </Link>
                </div>
            )}
        </div>
    );
}
