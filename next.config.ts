import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Calidad alta para capturas con texto: con la de serie (75) se veían blandas en pantallas de alta densidad.
  images: { qualities: [75, 90], formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
