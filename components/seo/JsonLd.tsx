import { siteConfig, skills } from "@/lib/constants";

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Arturo Legaspi Rodrigo",
      alternateName: siteConfig.name,
      jobTitle: "Tech Lead",
      description: siteConfig.description,
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      email: `mailto:${siteConfig.email}`,
      telephone: siteConfig.phoneHref,
      worksFor: {
        "@type": "Organization",
        name: "Santander Digital Services",
      },
      knowsAbout: [
        "Arquitectura de software",
        "Liderazgo técnico",
        "Banca digital",
        "Microservicios",
        ...skills.map((skill) => skill.name),
      ],
      knowsLanguage: ["es"],
      sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "es",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      inLanguage: "es",
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      mainEntity: { "@id": personId },
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
