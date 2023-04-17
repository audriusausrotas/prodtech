import Image from "next/image";

export default function ServicesPicture({ shadow, data }) {
  return (
    <div className="relative self-center hidden xs:block sm:h-fit">
      <div
        className={`xl:w-[600px] h-[400px] rounded-lg  overflow-hidden flex ${
          shadow ? "shadow-ms" : ""
        }`}
      >
        <Image
          src={data.url}
          alt={data.alt}
          width={data.dimensions.width}
          height={data.dimensions.width}
          className="z-10 object-cover object-center w-full h-full"
        />
      </div>
      <div className="absolute z-0 w-32 h-32 rounded-lg -top-2 -left-2 bg-secondary "></div>
      <div className="absolute -bottom-2 -right-2 z-0 sm:w-[450px] w-60 h-36 sm:h-60 rounded-lg bg-secondary"></div>
    </div>
  );
}
