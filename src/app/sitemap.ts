import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      lastModified: new Date(),
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    },
  ];
}
