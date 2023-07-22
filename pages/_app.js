import "../styles/globals.css";
import Navigation from "../Components/Layout/Navigation/Navigation";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HYQ25H1PPD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-HYQ25H1PPD');`}
      </Script>

      <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
        <PrismicPreview repositoryName={repositoryName}>
          <Navigation />
          <main className="w-full min-h-[70.9vh] text-xl">
            <Component {...pageProps} />
          </main>
        </PrismicPreview>
      </PrismicProvider>
    </>
  );
}
