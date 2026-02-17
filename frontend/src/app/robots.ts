import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/invite/"],
    },
    sitemap: "https://app.korevitta.com/sitemap.xml",
    host: "https://app.korevitta.com",
  };
}
