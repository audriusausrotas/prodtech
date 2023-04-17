import ImageContainer from "../Components/ImageContainer";
import AboutHeader from "./AboutHeader";
import ContactUsElement from "../Components/ContactUsElement";
import PostsTitles from "../Components/PostsTitles";

export default function AboutMain({ data, card }) {
  return (
    <div className="flex flex-col m-auto ">
      <AboutHeader data={data} />
      {data.slices.map((item, index) => (
        <div
          className="px-4 py-20 text-white bg-primary odd:bg-white odd:text-black "
          key={index}
        >
          <div
            className={`max-w-[1440px]  justify-around flex gap-4 flex-col xl:flex-row m-auto ${
              index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
            }`}
          >
            <div className="self-center">
              <PostsTitles data={item.primary} />
            </div>
            <ImageContainer data={item.items} />
          </div>
        </div>
      ))}
      <ContactUsElement card={card} />
    </div>
  );
}
