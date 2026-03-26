import type { Metadata } from "next";
import SpringSummitClient from "./SpringSummitClient";

export const metadata: Metadata = {
  title: "Spring EdTech Summit | ET Tech X India",
  description: "Join the ET Tech X Spring Summit with expert sessions, networking, and innovation in education technology.",
  alternates: { canonical: "https://www.ettechx.com/spring-summit" },
  openGraph: {
    title: "Spring EdTech Summit | ET Tech X India",
    description:
      "Join the ET Tech X Spring Summit with expert sessions, networking, and innovation in education technology.",
    url: "https://www.ettechx.com/spring-summit",
    images: [{ url: "https://www.ettechx.com/expo.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spring EdTech Summit | ET Tech X India",
    description:
      "Join the ET Tech X Spring Summit with expert sessions, networking, and innovation in education technology.",
    images: ["https://www.ettechx.com/expo.jpeg"],
  },
};

export default function Page() {
  return <SpringSummitClient />;
}

