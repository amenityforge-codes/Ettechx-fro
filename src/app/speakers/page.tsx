import type { Metadata } from "next";
import SpeakersClient from "./SpeakersClient";

export const metadata: Metadata = {
  title: "All Speakers | ET Tech X",
  description:
    "Discover keynote speakers and thought leaders at ET Tech X shaping the future of education and technology.",
  alternates: { canonical: "https://www.ettechx.com/speakers" },
  openGraph: {
    title: "All Speakers | ET Tech X",
    description:
      "Discover keynote speakers and thought leaders at ET Tech X shaping the future of education and technology.",
    url: "https://www.ettechx.com/speakers",
  },
};

export default function Page() {
  return <SpeakersClient />;
}

