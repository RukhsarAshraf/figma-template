import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image"; 
import { Product } from "@/sanity/types/productType";
import {FetchProductsData} from "@/sanity/lib/fetchData";

export default async function Shop() {

    const products = await FetchProductsData();
    return (
        <div>
            <section
                style={{ backgroundImage: "url(/shop1.png)" }}
                className="flex flex-col justify-center items-center h-[300px] mt-2 text-center bg-cover bg-center lg:px-15"
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

            <section className="mx-auto mt-4 px-4 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {products.map((product:Product) => (
                        <div
                            key={product._id}
                            className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md"
                        >
                            <Link href={`/shop/${product.slug}`}>
                            <Image
                                src={urlForImage(product.image).url()} // Sanity se aane wala image URL
                                alt={product.title}
                                width={300}
                                height={200}
                                className="w-full h-auto object-cover rounded-md"
                            />
                           <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">{product.title}</h3>
                           <p className="text-sm sm:text-base text-gray-700">${product.price}</p>
                           <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                                Add to Cart
                            </button></Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}





// "use client"
// import { IoIosArrowForward } from "react-icons/io";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { FetchProductsData } from "../../sanity/lib/fetchData";
// import Link from "next/link";
// import { urlForImage } from "@/sanity/lib/image"; 
// import { Product } from "@/sanity/types/productType";

// export default function Shop() {
//     const [products, setProducts] = useState([]); // State for fetched products
//     const [loading, setLoading] = useState(true); // State for loading indicator

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const data = await FetchProductsData(); // Fetch data from Sanity
//                 setProducts(data); // Store fetched data in state
//                 setLoading(false); // Turn off loading state
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//                 setLoading(false); // Ensure loading state is off even on error
//             }
//         }
//         fetchData();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>; // Show loading indicator while fetching data
//     }

//     return (
//         <div>
//             <section
//                 style={{ backgroundImage: "url(/shop1.png)" }}
//                 className="flex flex-col justify-center items-center h-[500px] text-center bg-cover bg-center lg:px-15"
//             >
//                 <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold">Shop</h1>
//                 <span className="mt-2 flex items-center justify-center">
//                     <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex items-center">
//                         Home
//                         <IoIosArrowForward className="mx-2 text-lg sm:text-xl lg:text-2xl size-8" />
//                         Shop
//                     </p>
//                 </span>
//             </section>

//             <section className="mx-auto mt-4 px-4 lg:px-8">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//                     {products.map((product:Product) => (
//                         <div
//                             key={product._id}
//                             className="border p-4 group active:scale-95 transition-transform cursor-pointer rounded-md"
//                         >
//                             <Link href={`/shop/${product.slug}`}>
//                             <Image
//                                 src={urlForImage(product.image).url()} // Sanity se aane wala image URL
//                                 alt={product.title}
//                                 width={300}
//                                 height={200}
//                                 className="w-full h-auto object-cover rounded-md"
//                             ></Image>
//                            <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold">{product.title}</h3>
//                            <p className="text-sm sm:text-base text-gray-700">${product.price}</p>
//                            <button className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
//                                 Add to Cart
//                             </button></Link>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// }