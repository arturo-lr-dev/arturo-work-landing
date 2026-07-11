import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Buscadores clásicos y crawlers de IA (GPTBot, ClaudeBot,
      // PerplexityBot, Google-Extended…): acceso total — la web es
      // informativa y interesa ser citado en respuestas generativas.
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://arturo.work/sitemap.xml",
    host: "https://arturo.work",
  };
}
