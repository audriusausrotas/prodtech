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
    <div className="fixed top-0 left-0 z-50 flex w-full h-screen bg-white select-none scroll ">
      <div className="relative m-auto pointer-events-none shadow-s1 rounded-xl">
        <img src={image} alt="" className=" object-contain h-[70%]    " />
        <div className="absolute text-2xl font-bold text-white opacity-80 top-2 right-4">
          {image?.slice(-6)}
        </div>
      </div>
      <IoIosArrowDropleftCircle
        size={60}
        onClick={prevHandler}
        className="absolute transition-all rounded-full cursor-pointer top-1/2 hover:scale-110 left-[10%] hover:text-secondary text-gray1"
      />
      <IoIosArrowDroprightCircle
        size={60}
        onClick={nextHandler}
        className="absolute transition-all cursor-pointer hover:scale-110 top-1/2 hover:text-secondary right-[10%] text-gray1"
      />
      <IoMdCloseCircle
        size={60}
        onClick={closeHandler}
        className="absolute transition-all rounded-full cursor-pointer hover:text-secondary hover:scale-110 top-10 right-10 text-gray1"
      />
    </div>
  );
}
