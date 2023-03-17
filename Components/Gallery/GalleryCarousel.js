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
    <div className="fixed top-0 left-0 z-50 flex w-full h-screen p-20 select-none bg-primary ">
      <img
        src={image}
        alt=""
        className="relative object-contain w-full h-full pointer-events-none rounded-xl"
      />
      <IoIosArrowDropleftCircle
        size={60}
        onClick={prevHandler}
        className="absolute transition-all cursor-pointer top-1/2 hover:scale-125 left-24 text-secondary"
      />
      <IoIosArrowDroprightCircle
        size={60}
        onClick={nextHandler}
        className="absolute transition-all cursor-pointer hover:scale-125 top-1/2 right-24 text-secondary"
      />
      <IoMdCloseCircle
        size={40}
        onClick={closeHandler}
        className="absolute transition-all cursor-pointer hover:scale-125 top-10 right-24 text-secondary"
      />
      <div className="absolute text-2xl font-bold text-white top-24 left-1/2">
        {image?.slice(-6)}
      </div>
    </div>
  );
}
