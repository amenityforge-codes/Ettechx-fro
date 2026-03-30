import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | ET Tech X",
  description: "Explore ET Tech X gallery moments from awards, conferences, and expo events across editions.",
  alternates: { canonical: "https://www.ettechx.com/gallery" },
  openGraph: {
    title: "Gallery | ET Tech X",
    description: "Explore ET Tech X gallery moments from awards, conferences, and expo events across editions.",
    url: "https://www.ettechx.com/gallery",
  },
};

export default function Page() {
  return <GalleryClient />;
}

