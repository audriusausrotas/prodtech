import Image from "next/image";

export default function GalleryImage({ data, clickHandler, id }) {
  return (
    <div className="max-w-xs ">
      <Image
        src={data.image.url}
        id={id}
        onClick={clickHandler}
        alt={data.image.alt}
        width={data.image.dimensions.width}
        height={data.image.dimensions.height}
        className="object-cover object-center w-full h-full rounded-lg cursor-pointer"
      />
    </div>
  );
}
