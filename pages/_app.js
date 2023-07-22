import "../styles/globals.css";
import Navigation from "../Components/Layout/Navigation/Navigation";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import Head from "next/head";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GoogleAnalytics measurementId="G-HYQ25H1PPD" />
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
