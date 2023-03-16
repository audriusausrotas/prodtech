import ImageContainer from "./ImageContainer";
import TextContainer from "./TextContainer";
import AboutHeader from "./AboutHeader";

export default function AboutMain() {
  return (
    <div className="max-w-[1440px] m-auto flex flex-col">
      <AboutHeader />
      <div className="flex gap-4 py-16 text-white bg-primary">
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
      <div className="flex gap-4 py-16">
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
        <ImageContainer />
      </div>
      <div></div>
    </div>
  );
}
