import GalleryImage from "./GalleryImage";
import GalleryCarousel from "./GalleryCarousel";
import { useState } from "react";

export default function GalleryMain({ images }) {
  const [image, setImage] = useState("");

  function clickHandler(e) {
    setImage(+e.target.id);
  }

  function closeHandler() {
    setImage("");
  }

  function nextHandler() {
    images[image + 1] ? setImage((prev) => +prev + 1) : setImage(0);
  }

  function prevHandler() {
    images[image - 1]
      ? setImage((prev) => +prev - 1)
      : setImage(images.length - 1);
  }

  return (
    <>
      {image !== "" && (
        <GalleryCarousel
          image={images[image].image}
          id={image}
          total={images.length}
          closeHandler={closeHandler}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
        />
      )}

      <div className="flex justify-center flex-wrap gap-4 max-w-[1440px] mx-auto my-8 lg:my-20 px-4">
        {images.map((item, index) => (
          <GalleryImage
            key={index}
            id={index}
            data={item}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </>
  );
}
