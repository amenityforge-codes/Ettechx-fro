import type { Metadata } from "next";
import WorkshopsClient from "./WorkshopsClient";

export const metadata: Metadata = {
  title: "EdTech Workshops | Hands-on Learning & Training",
  description: "Join expert-led workshops on AI, digital learning, and emerging technologies at ET Tech X.",
  alternates: { canonical: "https://www.ettechx.com/workshops" },
  openGraph: {
    title: "EdTech Workshops | Hands-on Learning & Training",
    description:
      "Join expert-led workshops on AI, digital learning, and emerging technologies at ET Tech X.",
    url: "https://www.ettechx.com/workshops",
    images: [{ url: "https://www.ettechx.com/Workshop.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EdTech Workshops | Hands-on Learning & Training",
    description:
      "Join expert-led workshops on AI, digital learning, and emerging technologies at ET Tech X.",
    images: ["https://www.ettechx.com/Workshop.jpeg"],
  },
};

export default function Page() {
  return <WorkshopsClient />;
}

