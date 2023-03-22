import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function Header() {
  return (
    <div className="w-full max-w-[1440px] pt-20 m-auto h-[680px]  bg-[url('/mainHeader.jpg')] flex flex-col justify-evenly items-center text-white">
      <div className="w-full px-8 text-6xl font-bold leading-snug text-center lg:px-40">
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipis.
      </div>
      <div className="text-2xl font-semibold ">Lorem Ipsum Dolor Sit</div>
      <IoIosArrowDropdownCircle size={60} />
    </div>
  );
}
