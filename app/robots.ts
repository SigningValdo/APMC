import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/member/", "/api/"],
      },
    ],
    sitemap: "https://apmc-cameroon.org/sitemap.xml",
  }
}
