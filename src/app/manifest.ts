import type { MetadataRoute } from "next"

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
