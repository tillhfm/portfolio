import type {MetadataRoute} from "next"

/**
 * Next.js Metadata Route — returns the XML sitemap.
 * `lastModified` is set to the current date at build time so crawlers see a
 * fresh timestamp on each deployment.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://tillhfm.de",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ]
}
