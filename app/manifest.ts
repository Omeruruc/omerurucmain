import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ömer Faruk Uruç | Yazılım Mühendisi & Yapay Zeka Araştırmacısı",
    short_name: "Ömer Faruk Uruç",
    description:
      "Full-stack geliştirme, yapay zeka entegrasyonları ve çoklu ajan sistemleri üzerine çalışan yazılım mühendisliği öğrencisi.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9f6",
    theme_color: "#8a7355",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
