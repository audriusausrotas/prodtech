import React from "react";

export default function ServicesPicture({ shadow }) {
  return (
    <div className="relative ">
      <div
        className={`xl:w-[600px] xl:h-[400px] w-[80vw] h-[400px] rounded-lg overflow-hidden flex ${
          shadow ? "shadow-ms" : ""
        }`}
      >
        <img src="/services1.jpg" alt="asdf" className="z-10" />
      </div>
      <div className="absolute top-[-10px] left-[-10px] z-0  w-32 h-32 rounded-lg bg-secondary "></div>
      <div className="absolute bottom-[-10px] right-[-10px] z-0 sm:w-[450px] w-72 h-36 sm:h-60 rounded-lg bg-secondary"></div>
    </div>
  );
}
