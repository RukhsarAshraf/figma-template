import { Key } from "react"; // "readline" se "react" mein change kiya, kyunki `Key` React ke liye relevant hai.

export interface Product {
  _id: string;
  title: string;
  _type: "product";
  quantity: number; // Add the quantity property
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  },
  featured: boolean;
  colors?: string[]; // Assume ki colors ek string array hain (e.g., ["red", "blue"]).
  index: Key | null; // `undefined` already implied hota hai optional fields mein.
  price: number;
  summary?: string;
  slug: {
    _type: "string";
    current: string;
  }[];
  
}
