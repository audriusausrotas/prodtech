import ContactUsElement from "../Components/ContactUsElement";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import TextContainer from "../About/TextContainer";
import ImageContainer from "../About/ImageContainer";
import ServicesItem from "./ServicesItem";
import ImageElement from "./ImageElement";

export default function HomeMain(props) {
  return (
    <div className="flex flex-col ">
      <div className="w-full max-w-[1440px] pt-20 m-auto h-[680px]  bg-[url('/mainHeader.jpg')] flex flex-col justify-evenly items-center text-white">
        <div className="w-full px-8 text-6xl font-bold leading-snug text-center lg:px-40">
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
      <div className="py-20 text-white bg-primary">
        <div className="max-w-[1440px] px-8 flex flex-col m-auto gap-16">
          <div className="flex flex-col max-w-[550px] gap-4 capitalize">
            <div className="flex items-center gap-2 before:block before:w-8 before:h-1 before:bg-secondary ">
              what do we do
            </div>
            <div className="text-5xl">Services We offer</div>
          </div>
          <div className="flex flex-wrap justify-center w-full gap-8 xl:justify-between ">
            <ServicesItem
              img="/services1.jpg"
              name="designing"
              link="/services/designing"
            />
            <ServicesItem
              img="/t.jpg"
              name="production"
              link="/services/production"
            />
            <ServicesItem
              img="/ap1.jpg"
              name="automation "
              link="/services/automation"
            />
            <ServicesItem
              img="/ap2.jpg"
              name="repair"
              link="/services/repair"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] m-auto py-20 px-8 flex flex-col gap-12 ">
        <div className="flex flex-col max-w-[550px] gap-4 capitalize ">
          <div className="flex items-center gap-2 before:block before:w-8 before:h-1 before:bg-secondary ">
            our gallery
          </div>
          <div className="text-5xl">Completed works</div>
        </div>
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="flex flex-col flex-1 gap-4 ">
            <div className="h-60">
              <ImageElement img="about1.jpg" />
            </div>
            <div className="h-80">
              <ImageElement img="ap2.jpg" />
            </div>
          </div>
          <div className="max-h-[500px] pt-10 flex-1 hidden md:block">
            <ImageElement img="ap1.jpg" />
          </div>
          <div className="flex flex-col flex-1 gap-4 pt-10">
            <div className="h-80">
              <ImageElement img="ap3.jpg" />
            </div>
            <div className="h-60">
              <ImageElement img="t.jpg" />
            </div>
          </div>
        </div>
      </div>
      <ContactUsElement />
    </div>
  );
}
