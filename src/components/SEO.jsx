import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  image,
  url,
  siteName = "SportlyRadar",
  type = "website",
  author = "SportlyRadar",
  locale = "en_US",
  robots = "index, follow",
  publishedTime,
  modifiedTime
}) => {
  return (
    <Helmet>

      {/* ================= BASIC SEO ================= */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <meta name="author" content={author} />

      {/* ================= CANONICAL ================= */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* ================= MOBILE / RESPONSIVE ================= */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0f172a" />

      {/* ================= OPEN GRAPH (FACEBOOK / WHATSAPP) ================= */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={title} />}

      {/* ================= TWITTER ================= */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {url && <meta name="twitter:url" content={url} />}

      {/* ================= ARTICLE (BLOG / NEWS) ================= */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* ================= SECURITY ================= */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

    </Helmet>
  );
};

export default SEO;
