import { redirect } from "next/navigation";

const PARTNER_CONTRACT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf7tMg9LSD29HIm1PphFCJ1gfnzHI1C0tLlsgJ8ngeHtsyT5A/viewform?usp=header";

export default function Page() {
  redirect(PARTNER_CONTRACT_FORM_URL);
}

