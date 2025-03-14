import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            allow: "/",
            disallow: [],
            userAgent: "*",
        },
        sitemap: "https://nextjs-boilerplate-three-iota-34.vercel.app/sitemap.xml",
    };
}
