import "../styles/globals.css";
import Navigation from "../Components/Layout/Navigation/Navigation";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Navigation />
        <main className="w-full min-h-[70.9vh] text-xl">
          <Component {...pageProps} />
        </main>
      </PrismicPreview>
    </PrismicProvider>
  );
}
