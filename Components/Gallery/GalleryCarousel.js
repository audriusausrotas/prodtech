import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

export default function GalleryCarousel({
  image,
  closeHandler,
  nextHandler,
  prevHandler,
}) {
  return (
    <div className="fixed top-0 left-0 z-50 flex w-full h-screen p-20 bg-white select-none ">
      <img
        src={image}
        alt=""
        className="relative object-contain h-full m-auto pointer-events-none shadow-s1 rounded-xl"
      />
      <IoIosArrowDropleftCircle
        size={70}
        onClick={prevHandler}
        className="absolute transition-all rounded-full cursor-pointer top-1/2 hover:scale-125 left-24 hover:text-secondary text-primary"
      />
      <IoIosArrowDroprightCircle
        size={70}
        onClick={nextHandler}
        className="absolute transition-all cursor-pointer hover:scale-125 top-1/2 hover:text-secondary right-24 text-primary"
      />
      <IoMdCloseCircle
        size={70}
        onClick={closeHandler}
        className="absolute transition-all rounded-full cursor-pointer hover:text-secondary hover:scale-125 top-10 right-24 text-primary"
      />
      <div className="absolute text-2xl font-bold text-white top-24 left-1/2">
        {image?.slice(-6)}
      </div>
    </div>
  );
}
