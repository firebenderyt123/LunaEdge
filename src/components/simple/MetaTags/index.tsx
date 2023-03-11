import React from "react";

import {
  metaTitle,
  metaDescription,
  metaKeywords,
  metaAuthor,
  metaImage,
  metaUrl,
  metaType,
} from "@config/siteConfig";

import favicon from "@images/favicon.png";

const MetaTags: React.FC = () => {
  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={metaAuthor} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={favicon.src} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={metaType} />
      <link rel="icon" type="image/png" href={favicon.src} />
    </>
  );
};

export default MetaTags;
