import ashishVidyarthiImg from "../../Speakers images/Ashish Vidyarthi  1.png";
import vvLaxminarayanImg from "../../Speakers images/shri v.v lakshmi Narayana.png";
import liisaToivonenImg from "../../Speakers images/Liisa_Toivonen-Picsart-AiImageEnhancer-removebg-preview.png";
import biswajitSahaImg from "../../Speakers images/Biswajit Saha.png";
import francisJosephImg from "../../Speakers images/Francis Joseph formal Photo.png";

import chinuAgrawalImg from "../../Speakers images/Chinu Agrawal.png";
import swatiPopatImg from "../../Speakers images/5__Dr._Swati_Popat_Vats-removebg.png";
import sonalAndrewsImg from "../../Speakers images/Sonal Profile pic.png";
import anjumBabuKhanImg from "../../Speakers images/Anjum Babu Khan.png";
import drReetaSonawatImg from "../../Speakers images/Dr Reeta Sonawat.png";
import drMayuriImg from "../../Speakers images/Dr Mayuri.png";

import balakistaReddyImg from "../../Speakers images/Balakista Reddy 2.png";
import brVishwanathamritaImg from "../../Speakers images/Br. Vishwanathamrita Chaitanya.png";
import profPushpanadhamImg from "../../Speakers images/Prof. Karanam.png";
import jawaharSurisettiImg from "../../Speakers images/Jawahar Surisetti.png";
import drKondalReddyImg from "../../Speakers images/Dr Kondal Reddy.png";
import krishnaChalamImg from "../../Speakers images/Krishna Chalam Vice-Chancellor 1.png";

export type Speaker = {
  name: string;
  designation: string;
  organization: string;
  image: string;
  accentColor: string;
  bgAccent: string;
  borderAccent: string;
};

export type SpeakerGroup = {
  id: string;
  label: string;
  speakers: Speaker[];
};

const accentStyles = [
  {
    accentColor: "from-primary to-deep-purple",
    bgAccent: "bg-primary/10",
    borderAccent: "border-primary/30",
  },
  {
    accentColor: "from-secondary to-gold",
    bgAccent: "bg-secondary/10",
    borderAccent: "border-secondary/30",
  },
  {
    accentColor: "from-accent to-teal",
    bgAccent: "bg-accent/10",
    borderAccent: "border-accent/30",
  },
  {
    accentColor: "from-deep-purple to-primary",
    bgAccent: "bg-deep-purple/10",
    borderAccent: "border-deep-purple/30",
  },
  {
    accentColor: "from-gold to-secondary",
    bgAccent: "bg-gold/10",
    borderAccent: "border-gold/30",
  },
  {
    accentColor: "from-teal to-accent",
    bgAccent: "bg-teal/10",
    borderAccent: "border-teal/30",
  },
];

const withAccent = (index: number) => accentStyles[index % accentStyles.length];

export const speakerGroups: SpeakerGroup[] = [
  {
    id: "k12",
    label: "K12 Speakers",
    speakers: [
      {
        name: "Ashish Vidyarthi",
        designation: "",
        organization: "",
        image: ashishVidyarthiImg,
        ...withAccent(0),
      },
      {
        name: "VV Laxminarayan",
        designation: "",
        organization: "",
        image: vvLaxminarayanImg,
        ...withAccent(1),
      },
      {
        name: "Lisa Tasvonen",
        designation: "",
        organization: "",
        image: liisaToivonenImg,
        ...withAccent(2),
      },
      {
        name: "Biswajit Saha",
        designation: "",
        organization: "",
        image: biswajitSahaImg,
        ...withAccent(3),
      },
      {
        name: "Francis Joseph",
        designation: "",
        organization: "",
        image: francisJosephImg,
        ...withAccent(4),
      },
      {
        name: "Dr. Kondal Reddy",
        designation: "",
        organization: "",
        image: drKondalReddyImg,
        ...withAccent(0),
      },
    ],
  },
  {
    id: "foundational",
    label: "Foundational Years",
    speakers: [
      {
        name: "Chinu Agrawal",
        designation: "",
        organization: "",
        image: chinuAgrawalImg,
        ...withAccent(1),
      },
      {
        name: "Swati Popat",
        designation: "",
        organization: "",
        image: swatiPopatImg,
        ...withAccent(2),
      },
      {
        name: "Sonal Andrews",
        designation: "",
        organization: "",
        image: sonalAndrewsImg,
        ...withAccent(3),
      },
      {
        name: "Anjum Babu Khan",
        designation: "",
        organization: "",
        image: anjumBabuKhanImg,
        ...withAccent(4),
      },
      {
        name: "Dr. Reeta Sonawat",
        designation: "",
        organization: "",
        image: drReetaSonawatImg,
        ...withAccent(5),
      },
      {
        name: "Dr. Mayuri",
        designation: "",
        organization: "",
        image: drMayuriImg,
        ...withAccent(0),
      },
    ],
  },
  {
    id: "higher-education",
    label: "Higher Education Institution Speakers",
    speakers: [
      {
        name: "Balakista Reddy",
        designation: "",
        organization: "",
        image: balakistaReddyImg,
        ...withAccent(2),
      },
      {
        name: "Br. Vishwanathamrita Chaitanya",
        designation: "",
        organization: "",
        image: brVishwanathamritaImg,
        ...withAccent(3),
      },
      {
        name: "Prof. K. Pushpanadham",
        designation: "",
        organization: "",
        image: profPushpanadhamImg,
        ...withAccent(4),
      },
      {
        name: "Dr. Jawahar Surisetti",
        designation: "",
        organization: "",
        image: jawaharSurisettiImg,
        ...withAccent(5),
      },
      {
        name: "Krishna Chalam",
        designation: "",
        organization: "",
        image: krishnaChalamImg,
        ...withAccent(1),
      },
    ],
  },
];

// All speakers for the full speakers page

// Import all images from the Speakers images folder.
// Vite will replace these with URLs at build time.
const allSpeakerImages = import.meta.glob("/Speakers images/*.{png,jpg,jpeg,avif}", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const fileNameOverrides: Record<string, string> = {
  "Ashish Vidyarthi  1.png": "Ashish Vidyarthi",
  "shri v.v lakshmi Narayana.png": "VV Laxminarayan",
  "Liisa_Toivonen-Picsart-AiImageEnhancer-removebg-preview.png": "Lisa Tasvonen",
  "Liisa_Toivonen-Picsart-AiImageEnhancer-removebg-preview 2.png": "Lisa Tasvonen",
  "5__Dr._Swati_Popat_Vats-removebg.png": "Swati Popat",
  "Sonal Profile pic.png": "Sonal Andrews",
  "Jawahar Surisetti.png": "Dr. Jawahar Surisetti",
  "Prof. Karanam.png": "Prof. K. Pushpanadham",
  "Francis Joseph formal Photo.png": "Francis Joseph",
  "Geeta Ramanujam 2.png": "Geeta Ramanujam",
  "Dr Reeta Sonawat.png": "Dr. Reeta Sonawat",
  "Dr Mayuri.png": "Dr. Mayuri",
  "Dr Kondal Reddy.png": "Dr. Kondal Reddy",
  "Krishna Chalam Vice-Chancellor 1.png": "Krishna Chalam",
};

const fileNameToDisplayName = (fileName: string): string => {
  if (fileNameOverrides[fileName]) {
    return fileNameOverrides[fileName];
  }

  const withoutExt = fileName.replace(/\.[^/.]+$/, "");

  let name = withoutExt
    .replace(/[_\-]+/g, " ")
    .replace(/\b(removebg|preview|thumb|Picsart AiImageEnhancer|AiImageEnhancer)\b/gi, "")
    .replace(/\b(PNG\d*|PNG|HR|NEW|Oct)\b/gi, "")
    .replace(/\b\d+\b/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!name) {
    name = "Guest Speaker";
  }

  return name;
};

const existingNames = new Set(
  speakerGroups.flatMap((group) => group.speakers.map((speaker) => speaker.name.toLowerCase())),
);

const extraSpeakers: Speaker[] = [];
let extraIndex = 0;

for (const [path, url] of Object.entries(allSpeakerImages)) {
  const segments = path.split("/");
  const fileName = segments[segments.length - 1] ?? "";
  const name = fileNameToDisplayName(fileName);

  const normalized = name.toLowerCase();
  if (!name || existingNames.has(normalized)) {
    continue;
  }

  extraSpeakers.push({
    name,
    designation: "Speaker",
    organization: "",
    image: url,
    ...withAccent(extraIndex + speakerGroups.length),
  });

  extraIndex += 1;
}

export const allSpeakers: Speaker[] = [
  ...speakerGroups.flatMap((group) => group.speakers),
  ...extraSpeakers,
];

