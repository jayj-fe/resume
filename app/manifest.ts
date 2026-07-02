import type { MetadataRoute } from "next";
import { withBasePath } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jay.J",
    short_name: "Jay.J",
    start_url: withBasePath("/"),
    icons: [
      {
        src: withBasePath("/favicons/android-icon-36x36.png"),
        sizes: "36x36",
        type: "image/png",
      },
      {
        src: withBasePath("/favicons/android-icon-48x48.png"),
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: withBasePath("/favicons/android-icon-72x72.png"),
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: withBasePath("/favicons/android-icon-96x96.png"),
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: withBasePath("/favicons/android-icon-144x144.png"),
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: withBasePath("/favicons/android-icon-192x192.png"),
        sizes: "192x192",
        type: "image/png",
      },
    ],
    theme_color: "#fbfbf8",
    background_color: "#fbfbf8",
    display: "standalone",
  };
}
