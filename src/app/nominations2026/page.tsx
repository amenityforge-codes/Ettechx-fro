import { redirect } from "next/navigation";

const NOMINATIONS_2026_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd4L3ZeWfcfbuFqVoCVCrWVKxIuqoityznp1GA_Ku8ySS_gVA/viewform?usp=header";

export default function Page() {
  redirect(NOMINATIONS_2026_FORM_URL);
}

