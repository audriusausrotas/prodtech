import ImageContainer from "../About/ImageContainer";
import PostsTitles from "../Components/PostsTitles";

export default function AboutSection() {
  return (
    <div className="px-8 py-20 ">
      <div className="max-w-[1440px]  flex flex-col xl:flex-row lg:gap-4 gap-20  m-auto">
        <ImageContainer />
        <div>
          <PostsTitles
            heading="About Prodtech Engineering"
            title="Lorem Ipsum Dolor Sit Amet"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              lacinia eget nisi a suscipit. Duis eu sem faucibus, facilisis arcu
              non, interdum mauris. Morbi at urna quis erat convallis cursus.
              Phasellus pharetra viverra ex. Sed vel lacus sit amet lectus
              condimentum iaculis. Aliquam auctor est in dui porttitor, at
              ullamcorper ligula posuere. Phasellus pharetra viverra ex. Sed vel
              lacus sit amet lectus"
          />
        </div>
      </div>
    </div>
  );
}
