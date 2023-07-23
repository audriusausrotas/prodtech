import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const schemaData = {
    "@context": "http://www.schema.org",
    "@type": "Organization",
    name: "prodtech",
    url: "https://prodtech.lt",
    logo: "https://prodtech.lt/logo.png",
    description:
      "Prodtech - CNC Tekinimas, Frezavimas, Degalių gamyba, automatizavimas, robotizavimas",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pasagų g. 4",
      addressLocality: "Riešės k",
      addressRegion: "Vilniaus r.",
      postalCode: "LT-14265",
      addressCountry: "Lietuva",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+370 620 87532",
      email: "info@prodtech.lt",
    },
  };

  return (
    <Html lang="lt">
      <Head />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="google-site-verification"
        content="krs1JlkdKAnsKNlcEw7_ydCX2EOmSjt1UgJNhPkNIB4"
      />
      <meta
        name="keywords"
        content="CNC Tekinimas, CNC Frezavimas, CNC Projektavimas, CNC Degalių gamyba, Automatika, Servisas, Garantinis remontas, Robotizavimas"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
