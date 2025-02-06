import { client } from "./client";

// Fetch Product Data
export const FetchProductsData = async() => {
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
    return data;
  } catch (error) {
    console.error("Error fetching from Sanity:", error);
    throw error;
  }
};


export async function getData(slug: string) {
  try {
    const query = `*[_type == "shopItem" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      summary,
      discountedPrice,
      price,
      "image": image.asset->url,
      colors,
      sizeQuantities,
      totalItems,
      featured,
      _id
    }`;

    const product = await client.fetch(query, { slug });
    return product;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error; // Handle the error in your page component
  }
}

// Search Query for Sanity
export async function fetchSearchResults(searchTerm: string) {
  try {
    const query = `
      *[_type == "shopItem" && title match "${searchTerm}*"] {
        title,
        "slug": slug.current,
        summary,
        discountedPrice,
        price,
        "image": image.asset->url,
        colors,
        sizeQuantities,
        totalItems,
        featured,
        _id
      }
    `;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};

// export const fetchSearchResults = async (searchTerm: string) => {
//   try {
//     if (!searchTerm) return []; // Agar query empty ho, toh khali array return karo

//     const query = `
//       *[_type == "shopItem" && title match $searchTerm + "*"] {
//         title,
//         "slug": slug.current,
//         summary,
//         discountedPrice,
//         price,
//         "image": image.asset->url,
//         colors,
//         sizeQuantities,
//         totalItems,
//         featured,
//         _id
//       }
//     `;

//     const data = await client.fetch(query, { searchTerm });

//     return data.length > 0 ? data : []; // Agar results nahi milte toh empty array return kare
//   } catch (error) {
//     console.error("Search error:", error);
//     throw new Error("Error fetching search results.");
//   }
// };

