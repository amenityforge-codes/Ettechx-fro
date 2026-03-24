type SeoConfig = {
  title: string;
  description: string;
  canonical: string;
  schema?: Record<string, unknown>;
};

const upsertMetaTag = (attribute: "name" | "property", key: string, content: string) => {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

const upsertCanonical = (canonical: string) => {
  let canonicalLink = document.head.querySelector<HTMLLinkElement>("link[rel='canonical']");
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute("href", canonical);
};

const upsertSchema = (schema: Record<string, unknown>) => {
  const existing = document.getElementById("page-schema");
  if (existing) {
    existing.remove();
  }

  const script = document.createElement("script");
  script.id = "page-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

export const applyPageSeo = ({ title, description, canonical, schema }: SeoConfig) => {
  document.title = title;
  upsertMetaTag("name", "description", description);
  upsertMetaTag("name", "robots", "index, follow");
  upsertCanonical(canonical);

  if (schema) {
    upsertSchema(schema);
  }
};
