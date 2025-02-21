import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com"
      },
      {
        protocol: "https",
        hostname: 'images.unsplash.com'
      },{
        protocol: "https",
        hostname: "www.agnoulitahats.com"
      },
      { 
        protocol: 'https', 
        hostname: 'webshop-images-068c8dbe-0170-4368-80e8-0e7519d4a43e.s3.eu-central-1.amazonaws.com/**' 
      },
      { 
        protocol: 'https', 
        hostname: 'd2lzlcxz574yjo.cloudfront.net/**' 
      }
    ]
  }
};

export default nextConfig;
