import Header from "./Header";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import GallerySection from "./GallerySection";
import ContactUsElement from "../Components/ContactUsElement";

export default function HomeMain({ data, card }) {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header data={data[0].primary} />
      <AboutSection data={data[1]} />
      <ServicesSection data={data[2]} />
      <GallerySection data={data[3]} />
      <ContactUsElement card={card} />
    </div>
  );
}
