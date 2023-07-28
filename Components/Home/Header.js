import { IoIosArrowDropdownCircle } from "react-icons/io";
import Image from "next/image";

export default function Header({ data }) {
  return (
    <div className="w-full max-w-[1440px] pt-20 m-auto h-[680px] flex flex-col justify-evenly items-center text-white relative overflow-hidden">
      <Image
        priority
        src={data.image.url}
        alt={data.image.alt}
        width={data.image.dimensions.width}
        height={data.image.dimensions.height}
        className="absolute top-0 left-0 object-cover object-center w-full h-full rounded-b-lg"
      />
      <h1 className="z-10 w-full px-4 text-4xl font-bold leading-snug text-center sm:text-6xl lg:px-40">
        {data.header}
      </h1>
      <h4 className="z-10 text-2xl font-semibold">{data.text}</h4>
      <IoIosArrowDropdownCircle size={60} />
    </div>
  );
}
