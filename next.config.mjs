/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- Agrega esta línea
  images: {
    unoptimized: true, // GitHub Pages no soporta la optimización de imágenes nativa de Next.js
  },
};

export default nextConfig;
