import type { Metadata } from "next";
import GalleryManagerClient from "./GalleryManagerClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gallery Manager",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <GalleryManagerClient />;
}

