import ImageElement from "./ImageElement";
import PostsTitles from "../Components/PostsTitles";

export default function GallerySection() {
  return (
    <div className="max-w-[1440px] m-auto py-20 px-8 flex flex-col gap-12 ">
      <PostsTitles heading="our gallery" title="Completed works" />

      <div className="flex flex-col justify-between gap-8 sm:flex-row">
        <div className="flex flex-col flex-1 gap-4 ">
          <div className="h-60">
            <ImageElement img="about1.jpg" />
          </div>
          <div className="h-80">
            <ImageElement img="ap2.jpg" />
          </div>
        </div>
        <div className="flex-1 hidden pt-10  md:block">
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
  );
}
