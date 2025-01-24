

// Fetch Product Data
// export const FetchProductsData = async() => {
//   try {
//     const query = `*[_type == "shopItem"] {
//       title,
//       "slug": slug.current,
//       summary,
//       discountedPrice,
//       price,
//       image,
//       colors,s
//       sizeQuantities,
//       totalItems,
//       featured,
//       _id
//     }`;

//     const data = await client.fetch(query);
//     return data;
//   } catch (error) {
//     console.error("Error fetching from Sanity:", error);
//     throw error;
//   }
// };

// Home Component
import Home from "./components/Home";
// import { FetchProductsData } from "@/sanity/lib/fetchData";

export default async function Homepage() {
  // const query = `*[_type == "shopItem"] {
  //          title,
  //          "slug": slug.current,
  //          summary,
  //          discountedPrice,
  //          price,
  //          image,
  //          colors,s
  //          sizeQuantities,
  //          totalItems,
  //          featured,
  //          _id
  //        }`;
         
  // const products = await FetchProductsData();
  // console.log(products);

  return (
    <div>
      <Home />
    </div>
  );
}