import { client } from "@/sanity/lib/client";

// Fetch Product Data
export const FetchProductsData = async () => {
  try {
    const query = `*[_type == "shopItem"] {
      title,
      "slug": slug.current,
      summary,
      discountedPrice,
      price,
      image,
      colors,
      sizeQuantities,
      totalItems,
      featured,
      _id
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching from Sanity:", error);
    throw error;
  }
};

// Home Component
import Home from "./components/Home";

export default async function Homepage() {
  const products = await FetchProductsData();
  console.log(products);

  return (
    <div>
      <Home />
    </div>
  );
}