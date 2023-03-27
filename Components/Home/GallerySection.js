import ImageElement from "./ImageElement";
import PostsTitles from "../Components/PostsTitles";

export default function GallerySection({ data }) {
  return (
    <div className="max-w-[1440px] capitalize m-auto py-20 px-8 flex flex-col gap-12 ">
      <PostsTitles data={data.primary} />

      <div className="flex flex-col justify-between gap-8 sm:flex-row">
        <div className="flex flex-col flex-1 gap-4 ">
          <div className="h-60">
            <ImageElement data={data.items[0]} />
          </div>
          <div className="h-80">
            <ImageElement data={data.items[1]} />
          </div>
        </div>
        <div className="flex-1 hidden pt-10 md:block">
          <ImageElement data={data.items[2]} />
        </div>
        <div className="flex flex-col flex-1 gap-4 pt-10">
          <div className="h-80">
            <ImageElement data={data.items[3]} />
          </div>
          <div className="h-60">
            <ImageElement data={data.items[4]} />
          </div>
        </div>
      </div>
    </div>
  );
}
