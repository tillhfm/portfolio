import type {MetadataRoute} from "next"

/**
 * Next.js Metadata Route — returns robots.txt configuration.
 * Allows all user-agents to crawl all paths and references the sitemap URL.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://tillhfm.de/sitemap.xml",
    }
}
