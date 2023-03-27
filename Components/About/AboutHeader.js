import Image from "next/image";

export default function AboutHeader({ data }) {
  return (
    <div className="flex relative items-center max-w-[1440px] m-auto">
      <div className="flex flex-1">
        <Image
          priority
          src={data.header_image.url}
          alt={data.header_image.alt}
          width={data.header_image.dimensions.width}
          height={data.header_image.dimensions.height}
          className="object-cover object-center max-h-[600] max-w-[800] brightness-60 saturate-60"
        />
      </div>

      <div className="absolute flex flex-col items-center justify-center flex-1 w-full gap-4 px-4 text-center text-white -translate-x-1/2 md:translate-x-0 md:text-black md:static top-1/4 left-1/2">
        <h2 className="text-5xl font-semibold">{data.title}</h2>
        <p className="max-w-lg m-auto leading-9 text-center md:p-10">
          {data.text}
        </p>
      </div>
    </div>
  );
}
