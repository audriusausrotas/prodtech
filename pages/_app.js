import "@/Components/styles/globals.css";
import Navigation from "../Components/Navigation/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
