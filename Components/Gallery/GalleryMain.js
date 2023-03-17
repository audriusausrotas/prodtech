import { Images } from "./Images";
import GalleryImage from "./GalleryImage";
import { useEffect, useState } from "react";
import GalleryCarousel from "./GalleryCarousel";

export default function GalleryMain() {
  const [image, setImage] = useState(100000);

  function clickHandler(e) {
    setImage(e.target.id);
  }

  function closeHandler() {
    setImage(100000);
  }

  function nextHandler() {
    Images[image + 1] ? setImage((prev) => +prev + 1) : setImage(0);
  }

  function prevHandler() {
    Images[image - 1]
      ? setImage((prev) => +prev - 1)
      : setImage(Images.length - 1);
  }

  return (
    <>
      {image !== 100000 ? (
        <GalleryCarousel
          image={Images[image]}
          closeHandler={closeHandler}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
        />
      ) : (
        <div className="flex justify-center flex-wrap gap-4 max-w-[1440px] mx-auto my-14 ">
          {Images.map((item, index) => (
            <GalleryImage
              key={index}
              id={index}
              data={item}
              clickHandler={clickHandler}
            />
          ))}
        </div>
      )}
    </>
  );
}
