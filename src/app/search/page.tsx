"use client";
import { useState } from "react";
import SearchBar from "../components/Search";
import { fetchSearchResults } from "@/sanity/lib/fetchData";

interface SearchResult {
  _id: string;
  slug: string;
  title: string;
}

const SearchPage = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const data = await fetchSearchResults(query);
      setResults(data);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="m-8 p-4 md:p-6 lg:p-8 flex flex-col items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-black">
          Search Products
        </h1>
        <div className="w-full max-w-md">
          <SearchBar onSearch={handleSearch} />
        </div>

        {loading && <p className="text-gray-800 mt-4">Loading...</p>}

        <ul className="mt-4 w-full max-w-md">
          {results.length > 0 ? (
            results.map((item) => (
              <li key={item._id} className="p-2 border-b border-gray-800">
                <a
                  href={`/shop/${item.slug}`}
                  className="block font-bold text-black hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No results found</p>
          )}
        </ul>
      </div>
      <div className="bg-[#f3d2ef] w-full px-2 py-10 mt-1 mb-1">
        <div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Free Delivery */}
            <div className="bg-[#f3d2ef] py-8 border-t px-10">
              <h3 className="text-2xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600 text-xl">For all orders over $50, consectetur adipiscing elit.</p>
            </div>
            {/* 90 Days Return */}
            <div className="bg-[#f3d2ef] py-8 border-t px-10">
              <h3 className="text-2xl font-semibold mb-2">90 Days Return</h3>
              <p className="text-gray-600 text-xl">If goods have problems, consectetur adipiscing elit.</p>
            </div>
            {/* Secure Payment */}
            <div className="bg-[#f3d2ef] py-8 border-t px-10">
              <h3 className="text-2xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-xl">100% secure payment, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;