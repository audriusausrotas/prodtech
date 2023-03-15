import "../styles/globals.css";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <main className="w-full min-h-[70.9vh]">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
