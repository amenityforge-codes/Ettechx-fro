import type { Metadata } from "next";
import NewsletterManagerClient from "./NewsletterManagerClient";
import AdminShell from "../AdminShell";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Newsletter Manager",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AdminShell>
      <NewsletterManagerClient />
    </AdminShell>
  );
}

