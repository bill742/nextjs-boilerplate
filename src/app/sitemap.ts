import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            lastModified: new Date(),
            url: "https://nextjs-boilerplate-three-iota-34.vercel.app/",
        },
    ];
}
