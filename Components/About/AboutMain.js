import ImageContainer from "./ImageContainer";
import AboutHeader from "./AboutHeader";
import ContactUsElement from "../Components/ContactUsElement";
import PostsTitles from "../Components/PostsTitles";

export default function AboutMain() {
  return (
    <div className="flex flex-col m-auto ">
      <AboutHeader />
      <div className="px-8 py-20 text-white bg-primary">
        <div className="max-w-[1440px] justify-around flex flex-col xl:flex-row  m-auto">
          <ImageContainer />
          <PostsTitles
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
      <div className="px-8 py-20">
        <div className="max-w-[1440px] flex-col xl:flex-row flex justify-around gap-4 m-auto">
          <PostsTitles
            heading="About Prodtech Engineering"
            title="Lorem Ipsum Dolor Sit Amet"
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia
            eget nisi a suscipit. Duis eu sem faucibus, facilisis arcu non, interdum
            mauris. Morbi at urna quis erat convallis cursus. Phasellus pharetra
            viverra ex. Sed vel lacus sit amet lectus condimentum iaculis. Aliquam
            auctor est in dui porttitor, at ullamcorper ligula posuere. Phasellus
            pharetra viverra ex. Sed vel lacus sit amet lectus"
          />
          <ImageContainer />
        </div>
      </div>
      <ContactUsElement name="contact us" />
    </div>
  );
}
