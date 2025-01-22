import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Allow Sanity CDN for images
  },
};

export default nextConfig;
