import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arturo Legaspi — Tech Lead",
    short_name: "Arturo",
    description:
      "Tech Lead especializado en arquitectura de software, gestión de equipos y soluciones digitales para el sector bancario.",
    start_url: "/",
    display: "browser",
    background_color: "#EBECE6",
    theme_color: "#EBECE6",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
