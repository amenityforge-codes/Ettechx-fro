import type { Metadata } from "next";
import LoginClient from "./LoginClient";
import AdminShell from "../AdminShell";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AdminShell>
      <LoginClient />
    </AdminShell>
  );
}

