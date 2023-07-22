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
          className="object-cover object-center  xs:min-h-[550px] sm:min-h-full brightness-60 saturate-60 "
        />
      </div>

      <div className="absolute flex flex-col items-center justify-center flex-1 w-full gap-4 px-4 text-center text-white -translate-x-1/2 top-12 md:translate-x-0 sm:top-8 md:text-black md:static left-1/2">
        <h1 className="text-5xl font-semibold">{data.title}</h1>
        <h4 className="max-w-lg m-auto leading-9 text-center md:p-10">
          {data.text}
        </h4>
      </div>
    </div>
  );
}




