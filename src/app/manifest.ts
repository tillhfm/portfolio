import type {MetadataRoute} from "next"

/**
 * Next.js Metadata Route — returns the Web App Manifest, enabling the site
 * to be installed as a standalone PWA on mobile home screens.
 */
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Till Hoffmann — Portfolio",
        short_name: "Till Hoffmann",
        description: "Portfolio von Till Hoffmann, Junior-Softwareentwickler aus Dresden.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        lang: "de",
    }
}
