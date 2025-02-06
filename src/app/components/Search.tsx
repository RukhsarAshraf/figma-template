"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { fetchSearchResults } from "@/sanity/lib/fetchData";
import { Product } from "@/sanity/types/productType";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<[]>([]);

  // Fetch Suggestions as User Types
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 1) {
      try {
        const results = await fetchSearchResults(searchQuery);
        setSuggestions(results);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]); // Empty suggestions if less than 2 letters
    }
  };

  // Handle Search Submit
  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
      setSuggestions([]); // Clear suggestions after search
    }
  };

  // 🔎 Handle Suggestion Click
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    onSearch(suggestion);
    setSuggestions([]); // Hide suggestions
  };

  return (
    <div className="relative w-full max-w-md">
      {/* 🔎 Input Box */}
      <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 outline-none bg-transparent"
        />
        <button onClick={handleSearch}>
          <Search className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* 🔽 Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {suggestions.map((item:Product) => (
            <li
              key={item._id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(item.title)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
