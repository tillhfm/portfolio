import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const runtime = "nodejs"
export const alt = "Till Hoffmann — Jr.-Softwareentwickler aus Dresden"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
   const photoData = await readFile(join(process.cwd(), "public", "me.jpg"))
   const photoBase64 = `data:image/jpeg;base64,${photoData.toString("base64")}`

   return new ImageResponse(
      (
         <div
            style={{
               display: "flex",
               width: "100%",
               height: "100%",
               backgroundColor: "#ffffff",
               alignItems: "center",
               justifyContent: "center",
               gap: "60px",
               padding: "60px",
            }}
         >
            <img
               src={photoBase64}
               width={200}
               height={200}
               style={{ borderRadius: "100px", objectFit: "cover" }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
               <div style={{ fontSize: "52px", fontWeight: 700, color: "#09090b" }}>
                  Till Hoffmann
               </div>
               <div style={{ fontSize: "28px", color: "#71717a" }}>
                  Jr.-Softwareentwickler aus Dresden
               </div>
               <div style={{ fontSize: "22px", color: "#a1a1aa", marginTop: "8px" }}>
                  tillhfm.de
               </div>
            </div>
         </div>
      ),
      { ...size }
   )
}
