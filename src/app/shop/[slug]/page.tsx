
//import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {Product} from "@/sanity/types/productType";
import Image from "next/image";
import {getData} from "@/sanity/lib/fetchData";

export default async function ProductPage({params,} : {params: Promise<{slug: string}>}) {

  try {
    const {slug} = await params;
    // Fetch product data
    const product: Product = await getData(slug);

    if (!product) {
      return <div>Product not found</div>; // Error handling agar product na mile
    }

    return (
        <>
          <div className="container mx-auto px-4 py-8">
            {/* Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Section */}
              <div className="space-y-4">
                <div className="aspect-w-4 aspect-h-3">
                  <Image
                      src={product.image ? urlForImage(product.image).url() : "/placeholder-image.jpg"}
                      alt={product.title || "Product"}
                      width={300}
                      height={200}
                      className="w-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
                <p className="text-gray-500 text-sm mb-4">${product.price}</p>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500 space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">5 Customer Reviews</span>
                </div>
                <p className="text-gray-600 mb-6">{product.summary}</p>

                {/* Size Options */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-800">Size</h3>
                  <div className="flex space-x-4 mt-2">
                    {["L", "XL", "XS"].map((size) => (
                        <button key={size} className="px-4 py-2 border rounded-lg hover:border-gray-800">
                          {size}
                        </button>
                    ))}
                  </div>
                </div>

                {/* Color Options */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-800">Color</h3>
                  <div className="flex space-x-4 mt-2">
                    {["#3B82F6", "#FACC15", "#9333EA"].map((color) => (
                        <button
                            key={color}
                            className="w-8 h-8 rounded-full border border-gray-300"
                            style={{ backgroundColor: color }}
                        ></button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-12 text-center border rounded-lg"
                  />
                  <button className="bg-gray-800 text-white px-6 py-2 rounded-lg">Add to Cart</button>
                </div>

                <div className="text-sm text-gray-500">
                  <p>SKU: #15001</p>
                  <p>Category: Sofas</p>
                  <p>Tags: Sofa, Chair, Home, Shop</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="border-b">
                <nav className="flex space-x-8">
                  <button className="py-2 text-gray-800 border-b-2 border-gray-800">
                    <span>Description</span>
                  </button>
                  <button className="py-2 text-gray-500 hover:text-gray-800">Reviews [5]</button>
                </nav>
              </div>
              <div className="mt-4 text-gray-600">
                <p>
                  Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn makes the
                  unmistakable look and sound of Marshall. Unplug the cords and take the show on the
                  road.
                </p>
              </div>
            </div>
          </div>
        </>
    );
  }

  catch (error) {
    console.error("Error fetching product:", error);
    return <div>Error loading product : {(error instanceof Error) ? error.message : "Unknown error"}</div>;
  }
}
