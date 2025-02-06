
"use client";
import { urlForImage } from "@/sanity/lib/image";
import { Product } from "@/sanity/types/productType";
import Image from "next/image";
import { getData } from "@/sanity/lib/fetchData";
import AddToCart from "@/app/components/add-to-cart";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartProvider";
import { useWishlist } from "@/app/context/WishListProvider";

export default function ProductPage({ params }: { params: Promise <{ slug: string }> }) {
  const [product, setProduct] = useState<Product | null>(null);
  
  const [error, setError] = useState<string | null>(null);

  const cartItems = useCart()

  console.log(cartItems);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { slug } = await params;
        const product: Product = await getData(slug);
        setProduct(product);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(error instanceof Error ? error.message : "Unknown error");
      }
    };

    fetchProduct();
  }, [params]);
  console.log(error)
  const {wishlist,addToWishlist, removeFromWishlist } = useWishlist();
  
    // Wishlist add/remove function
    const toggleWishlist = () => {
      if (!product) return;
    
      const isInWishlist = wishlist.some((item) => item._id === product._id);
    
      if (isInWishlist) {
        removeFromWishlist(product._id);
      } else {
        addToWishlist(product);
      }
    };

    const isInWishlist = product ? wishlist.some((item) => item._id === product._id) : false;

    return (
      <div>
        <div className="container mx-auto px-4 py-8">
          {/* Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src={product?.image ? urlForImage(product.image).url() : "/placeholder-image.jpg"}
                  alt={product?.title || "Product"}
                  width={300}
                  height={200}
                  className="w-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              {product && <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>}
              {product && <p className="text-gray-500 text-sm mb-4">${product.price}</p>}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">5 Customer Reviews</span>
              </div>
              {product && <p className="text-black mb-6">{product.summary}</p>}

              {/* Wishlist Button */}
              <button onClick={toggleWishlist} className="flex items-center mt-3 mb-3 gap-2 p-2 border rounded-lg">
                <Heart fill={isInWishlist ? "red" : "none"} color="red" />
                {/* <span>{isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</span> */}
              </button>

              {/* Size Options */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-800">Size</h3>
                <div className="flex space-x-4 mt-2">
                  {["L", "XL", "XS"].map((size) => (
                    <button key={size} className="px-4 py-2 border hover:bg-[#FBEBB5] rounded-lg hover:border-gray-800 ">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {product && <AddToCart product={product} />}
            </div>
          </div>

          <div className="mt-12">
            <div className="border-b">
              <nav className="flex space-x-8">
                <button className="py-2 font-semibold text-gray-800 border-b-2 border-gray-800">
                  <span>Description</span>
                </button>
                <button className="py-2 text-gray-900 hover:text-gray-800">Reviews [5]</button>
              </nav>
            </div>
            <div className="mt-4 text-black font-semibold">
              <p>
                Embodying the raw, wayward spirit of rock&apos;n&apos;roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
