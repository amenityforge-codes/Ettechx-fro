import type { Metadata } from "next";
import ConferenceClient from "./ConferenceClient";

export const metadata: Metadata = {
  title: "Education Conference India | EdTech Leaders & Insights",
  description: "Attend ET Tech X conference with industry leaders discussing trends, innovation, and the future of education.",
  alternates: { canonical: "https://www.ettechx.com/conference" },
  openGraph: {
    title: "Education Conference India | EdTech Leaders & Insights",
    description:
      "Attend ET Tech X conference with industry leaders discussing trends, innovation, and the future of education.",
    url: "https://www.ettechx.com/conference",
    images: [{ url: "https://www.ettechx.com/Conference.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Conference India | EdTech Leaders & Insights",
    description:
      "Attend ET Tech X conference with industry leaders discussing trends, innovation, and the future of education.",
    images: ["https://www.ettechx.com/Conference.jpeg"],
  },
};

export default function Page() {
  return <ConferenceClient />;
}

