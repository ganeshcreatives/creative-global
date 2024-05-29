/* @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["dashboard-strapi.s3.ap-south-1.amazonaws.com"],
  },

  env: {
    STRAPI_PATH: "https://strapi.sekel.tech/api",
    STRAPI_URL: "https://strapi.sekel.tech",
    // STRAPI_PATH_STG : "https://strapi.sekel.tech/api",
    // STRAPI_URL_STG : "https://strapi.sekel.tech",
  },
};

export default nextConfig;