import { Images } from "./Images";
import GalleryImage from "./GalleryImage";
import { useState } from "react";
import GalleryCarousel from "./GalleryCarousel";

export default function GalleryMain() {
  const [image, setImage] = useState(null);

  function clickHandler(e) {
    setImage(e.target.id);
  }

  function closeHandler() {
    setImage(null);
  }

  function nextHandler() {
    setImage((prev) => prev + 1);
  }

  function prevHandler() {
    setImage((prev) => prev - 1);
  }

  return (
    <>
      {image ? (
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
