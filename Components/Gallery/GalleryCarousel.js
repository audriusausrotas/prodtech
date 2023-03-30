import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";

export default function GalleryCarousel({
  image,
  id,
  total,
  closeHandler,
  nextHandler,
  prevHandler,
}) {
  function click(e) {
    e.target.id === "out" && closeHandler();
  }

  return (
    <div
      className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full p-24 select-none backdrop-blur backdrop-brightness-50"
      onClick={click}
      id="out"
    >
      <div className="relative max-h-full w-fit">
        <div className="absolute flex self-end gap-8 text-2xl font-bold text-white top-2 right-4 opacity-80 ">
          {+id + 1 + " / " + total}
        </div>
        <IoCloseSharp
          size={40}
          onClick={closeHandler}
          className="absolute right-0 p-1 text-white transition-transform duration-300 rounded-full cursor-pointer hover:text-secondary hover:border-2 hover:rotate-90 hover:scale-90 -top-12"
        />

        <Image
          src={image.url}
          alt={image.alt}
          width={image.dimensions.width}
          height={image.dimensions.height}
          className="object-contain max-h-full w-fit rounded-xl shadow-s1"
        />
      </div>

      <IoIosArrowDropleftCircle
        size={60}
        onClick={prevHandler}
        className="absolute text-white transition-all rounded-full cursor-pointer left-8 top-1/2 hover:scale-90 hover:text-secondary"
      />
      <IoIosArrowDroprightCircle
        size={60}
        onClick={nextHandler}
        className="absolute text-white transition-all cursor-pointer hover:scale-90 top-1/2 hover:text-secondary right-8"
      />
    </div>
  );
}
