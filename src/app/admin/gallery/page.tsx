import type { Metadata } from "next";
import GalleryManagerClient from "./GalleryManagerClient";
import AdminShell from "../AdminShell";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gallery Manager",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AdminShell>
      <GalleryManagerClient />
    </AdminShell>
  );
}

