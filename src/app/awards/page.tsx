import type { Metadata } from "next";
import AwardsClient from "./AwardsClient";

export const metadata: Metadata = {
  title: "Education Awards India | ET Tech X Excellence Awards",
  description:
    "Recognizing outstanding educators, institutions, and EdTech innovators shaping the future of education in India.",
  alternates: { canonical: "https://www.ettechx.com/awards" },
  openGraph: {
    title: "Education Awards India | ET Tech X Excellence Awards",
    description:
      "Recognizing outstanding educators, institutions, and EdTech innovators shaping the future of education in India.",
    url: "https://www.ettechx.com/awards",
    images: [{ url: "https://www.ettechx.com/Awards.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Awards India | ET Tech X Excellence Awards",
    description:
      "Recognizing outstanding educators, institutions, and EdTech innovators shaping the future of education in India.",
    images: ["https://www.ettechx.com/Awards.jpeg"],
  },
};

export default function Page() {
  return <AwardsClient />;
}

