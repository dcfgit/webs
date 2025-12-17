/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/webs', // <--- Agrega el nombre de tu repositorio precedido por una barra
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
