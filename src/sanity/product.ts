import { SchemaTypeDefinition } from 'sanity';

export const product: SchemaTypeDefinition = {
  name: 'shopItem',
  title: 'Shop Item',
  type: 'document',
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "The name of the product.",
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "URL-friendly identifier for the product.",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "summary",
      type: "text",
      title: "Summary",
      description: "A brief description of the product.",
      validation: (Rule) => Rule.max(300),
    },
    {
      name: "discountedPrice",
      type: "number",
      title: "Discounted Price",
      description: "Price of the product after discount.",
      validation: (Rule) =>
        Rule.min(0).precision(2).error("Enter a valid discounted price."),
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      description: "Original price of the product.",
      validation: (Rule) =>
        Rule.min(0).precision(2).error("Enter a valid price."),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      description: "Primary image of the product.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "colors",
      type: "array",
      title: "Colors",
      description: "Available colors for the product.",
      of: [{ type: "string" }],
    },
    {
      name: "sizeQuantities",
      type: "array",
      title: "Size Quantities",
      description: "Quantity of the product in each size.",
      of: [
        {
          type: "object",
          fields: [
            { name: "size", type: "string", title: "Size" },
            { name: "quantity", type: "number", title: "Quantity" },
          ],
        },
      ],
    },
    {
      name: "totalItems",
      type: "number",
      title: "Total Items",
      description: "Total stock count of the product.",
      validation: (Rule) =>
        Rule.min(0).integer().error("Enter a valid total item count."),
    },
    {
      name: "featured",
      type: "boolean",
      title: "Featured",
      description: "Is this product featured?",
    },
  ],
};
