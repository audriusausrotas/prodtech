import ContactUsElement from "../Components/ContactUsElement";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import TextContainer from "../About/TextContainer";
import ImageContainer from "../About/ImageContainer";

export default function HomeMain(props) {
  return (
    <div className="flex flex-col ">
      <div className="w-full max-w-[1440px] pt-20 m-auto h-[680px] bg-[url('/mainHeader.jpg')] flex flex-col justify-evenly items-center text-white">
        <div className="w-full px-40 text-6xl font-bold leading-snug text-center">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipis.
        </div>
        <div className="text-2xl font-semibold ">Lorem Ipsum Dolor Sit</div>
        <IoIosArrowDropdownCircle size={60} />
      </div>

      <div className="px-8 py-20 ">
        <div className="max-w-[1440px]  flex flex-col xl:flex-row lg:gap-4 gap-20  m-auto">
          <ImageContainer />
          <TextContainer
            heading="About Prodtech Engineering"
            title="Lorem Ipsum Dolor Sit Amet"
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia
          eget nisi a suscipit. Duis eu sem faucibus, facilisis arcu non, interdum
          mauris. Morbi at urna quis erat convallis cursus. Phasellus pharetra
          viverra ex. Sed vel lacus sit amet lectus condimentum iaculis. Aliquam
          auctor est in dui porttitor, at ullamcorper ligula posuere. Phasellus
          pharetra viverra ex. Sed vel lacus sit amet lectus"
          />
        </div>
      </div>
      <div className="px-8 py-20 text-white bg-primary">
        <div className="max-w-[1440px] flex m-auto"></div>
      </div>
      <div className=""></div>
      {/* <ContactUsElement /> */}
    </div>
  );
}
