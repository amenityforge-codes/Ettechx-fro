import type { Metadata } from "next";
import SpeakersManagerClient from "./SpeakersManagerClient";
import AdminShell from "../AdminShell";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Speakers Manager",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AdminShell>
      <SpeakersManagerClient />
    </AdminShell>
  );
}

