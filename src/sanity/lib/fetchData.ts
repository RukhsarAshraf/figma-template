import { client } from "./client";

// Fetch Product Data
export const FetchProductsData = async () => {
  try {
    const query = `*[_type == "shopItem"] {
      title,
      "slug": slug.current,
      summary,
      discountedPrice,
      price,
      "image": image.asset->url,  // Ensure that we get the image URL
      colors,
      sizeQuantities,
      totalItems,
      featured,
      _id
    }`;

    const data = await client.fetch(query);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching from Sanity:", error);
    throw error;
  }
};


