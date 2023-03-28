import Button from "../Components/Button";
import Image from "next/image";

export default function ImageElement({ data }) {
  return (
    <div className="relative h-full transition-all group">
      <Image
        src={data.gallery_image.url}
        alt={data.gallery_image.alt}
        width={data.gallery_image.dimensions.width}
        height={data.gallery_image.dimensions.height}
        className="object-cover object-center w-full h-full rounded-lg"
      />
      <div className="absolute invisible -translate-x-1/2 top-1/2 left-1/2 opacity-90 group-hover:visible ">
        <Button link={data.gallery_link} name={data.link_name} />
      </div>
    </div>
  );
}
