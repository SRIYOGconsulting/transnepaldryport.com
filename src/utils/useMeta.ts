import { useEffect } from "react";

interface MetaOptions {
  title: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
}

export function useMeta({ title, description, ogImage, canonical }: MetaOptions) {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    if (description) {
      updateMetaTag("description", description);
    }

    // OG Title
    updatePropertyTag("og:title", title);

    // OG Description
    if (description) {
      updatePropertyTag("og:description", description);
    }

    // OG Image
    if (ogImage) {
      updatePropertyTag("og:image", ogImage);
    }

    // Canonical URL
    if (canonical) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [title, description, ogImage, canonical]);
}

// Utilities
function updateMetaTag(name: string, content: string) {
  let tag = document.querySelector(`meta[name='${name}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function updatePropertyTag(property: string, content: string) {
  let tag = document.querySelector(`meta[property='${property}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}
