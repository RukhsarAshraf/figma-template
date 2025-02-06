"use client"
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import { useWishlist } from "../context/WishListProvider";
import { Product } from '@/sanity/types/productType';
import { urlForImage } from "@/sanity/lib/image";

const WishlistPage = () => {
    // 
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <>
            <section
                style={{ backgroundImage: "url(/shop1.png)" }}
                className="flex flex-col justify-center items-center h-[300px] mt-2 text-center bg-cover bg-center lg:px-15"
            >
                <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold">Wishlist</h1>
                <span className="mt-2 flex items-center justify-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex items-center">
                        Home
                        <IoIosArrowForward className="mx-2 text-lg sm:text-xl lg:text-2xl size-8" />
                        Wishlist
                    </p>
                </span>
            </section>
            <div className="p-5">
                <h1 className="mt-2 text-2xl text-center font-semibold">My Wishlist</h1>
                {wishlist.length === 0 ? (
                    <p className="text-gray-700 text-center mt-4">No items in wishlist.</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {wishlist.map((product:Product) => (
                            <div key={product._id} className="border p-2">
                                <Image
                                    src={urlForImage(product.image).url() || "/api/placeholder/96/96"}
                                    alt={`${product.title} image`}
                                    className=""
                                    width={160}
                                    height={160}
                                />
                                <h2 className="text-lg font-bold">{product.title}</h2>
                                <p className="text-gray-500">${product.price}</p>
                                <button onClick={() => removeFromWishlist(product._id)} className="mt-2 text-red-500">
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default WishlistPage;
