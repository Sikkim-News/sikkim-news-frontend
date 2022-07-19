/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: [
      "localhost",
      "picsum.photos",
      "images.unsplash.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
