import Header from "./Header";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import GallerySection from "./GallerySection";
import ContactUsElement from "../Components/ContactUsElement";

export default function HomeMain(props) {
  return (
    <div className="flex flex-col ">
      <Header />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactUsElement />
    </div>
  );
}
