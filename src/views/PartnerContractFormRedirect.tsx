import { useEffect } from "react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf7tMg9LSD29HIm1PphFCJ1gfnzHI1C0tLlsgJ8ngeHtsyT5A/viewform?usp=header";

const PartnerContractFormRedirect = () => {
  useEffect(() => {
    window.location.href = GOOGLE_FORM_URL;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <p>Redirecting to partner contract form...</p>
    </div>
  );
};

export default PartnerContractFormRedirect;
