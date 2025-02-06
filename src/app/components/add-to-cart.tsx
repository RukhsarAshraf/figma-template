// 'use client';
// import React, { useState } from "react";
// import { Product } from "@/sanity/types/productType";
// import { useCart } from "../context/CartProvider";

// interface Props {
//   product: Product;
// }

// const addToCart: React.FC<Props> = ({product}) => {
//   const [quantity, setQuantity] = useState(1);

//   // Increase quantity
//   const increaseQuantity = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   // Decrease quantity 
//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity((prev) => prev - 1);
//     }
//   };

//   const {addToCart} = useCart();
//   const addToCartClick = () => {
//     addToCart(product, 1);
//   }

 

//   return (
//     <div className="flex items-center">
//       <div className="flex justify-center gap-5">
//         {/* Quantity Selector */}
//         <div className="bg-[#F0F0F0] flex justify-center w-[25%] rounded-3xl gap-6 items-center">
//           <button onClick={decreaseQuantity} className="text-2xl">-</button>
//           <p className="text-2xl">{quantity}</p>
//           <button onClick={increaseQuantity} className="text-2xl font-bold text-gray-700">+</button>
//         </div>

//         {/* Add to Cart Button */}
//         <div className="w-[400px] flex items-center">
//           <button
//             onClick={addToCartClick}
//             className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-blue-500"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default addToCart;
'use client';
import React, { useState } from "react";
import { Product } from "@/sanity/types/productType";
import { useCart } from "../context/CartProvider";

interface Props {
  product: Product;
}

const AddToCart: React.FC<Props> = ({ product }) => {  
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrease quantity 
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCartClick = () => {
    addToCart(product, quantity);
    alert(`${product.title} added to cart! 🛒`); // ✅ Alert added
  };

  return (
    <div className="flex items-center">
      <div className="flex justify-center gap-5">
        {/* Quantity Selector */}
        <div className="bg-[#F0F0F0] flex justify-center w-[25%] rounded-3xl gap-6 items-center">
          <button onClick={decreaseQuantity} className="text-2xl">-</button>
          <p className="text-2xl">{quantity}</p>
          <button onClick={increaseQuantity} className="text-2xl font-bold text-gray-700">+</button>
        </div>

        {/* Add to Cart Button */}
        <div className="w-[400px] flex items-center">
          <button
            onClick={addToCartClick}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-blue-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
