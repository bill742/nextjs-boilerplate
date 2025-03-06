import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            lastModified: new Date(),
            url: "https://billdean.me",
        },
        {
            lastModified: new Date(),
            url: "https://billdean.me/resume",
        },
    ];
}
