/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  
    images: {
      unoptimized: true, // GitHub Pages doesn't support dynamic image optimization
    },
    basePath: '/myportfolio', 
    assetPrefix: '/myportfolio/', 
    trailingSlash: true, 
  };
  
  export default nextConfig;
  