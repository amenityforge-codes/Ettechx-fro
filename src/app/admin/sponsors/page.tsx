import type { Metadata } from "next";
import SponsorsManagerClient from "./SponsorsManagerClient";
import AdminShell from "../AdminShell";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sponsors Manager",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AdminShell>
      <SponsorsManagerClient />
    </AdminShell>
  );
}

