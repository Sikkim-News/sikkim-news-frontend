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
      "sikkim-news-backend-p6i7o.ondigitalocean.app",
    ],
  },
};

module.exports = nextConfig;
