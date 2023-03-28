import Image from "next/image";

export default function ContactsHeader({ data }) {
  return (
    <div>
      <div className="relative w-full h-[506px] text-white bg-black05 flex flex-col text-center items-center justify-center rounded-b-lg overflow-hidden">
        <Image
          priority
          src={data.header_img.url}
          alt={data.header_img.alt}
          width={data.header_img.dimensions.width}
          height={data.header_img.dimensions.height}
          className="absolute top-0 left-0 object-cover object-center w-full h-full mix-blend-overlay "
        />
        <h1 className="z-10 p-8 text-6xl">{data.title}</h1>
        <h4 className="text-xl z-10 max-w-[28rem] leading-10">{data.header}</h4>
      </div>
    </div>
  );
}
