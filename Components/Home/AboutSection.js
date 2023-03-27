import ImageContainer from "../Components/ImageContainer";
import PostsTitles from "../Components/PostsTitles";

export default function AboutSection({ data }) {
  return (
    <div className="px-4 py-20 ">
      <div className="max-w-[1440px] justify-around items-center flex flex-col xl:flex-row lg:gap-8 gap-20  m-auto">
        <ImageContainer data={data.items} />
        <div>
          <PostsTitles data={data.primary} />
        </div>
      </div>
    </div>
  );
}
