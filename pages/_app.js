import "../styles/globals.css";
import Navigation from "../Components/Layout/Navigation/Navigation";
import Footer from "../Components/Layout/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <main className="w-full min-h-[70.9vh] text-xl">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
