import Image from "next/image";

export default function ImageContainer({ data }) {
  return (
    <div className="hidden sm:flex">
      <div className="relative h-[630px] w-[550px] m-auto ">
        <Image
          src={data[0].image.url}
          alt={data[0].image.alt}
          width={data[0].image.dimensions.width}
          height={data[0].image.dimensions.height}
          className="absolute top-0 left-0 rounded-lg w-[400px] max-h-[500px]"
        />
        <Image
          src={data[1].image.url}
          alt={data[1].image.alt}
          width={data[1].image.dimensions.width}
          height={data[1].image.dimensions.height}
          className="absolute rounded-lg left-60 top-80"
        />
        <Image
          src={data[2].image.url}
          alt={data[2].image.alt}
          width={data[2].image.dimensions.width}
          height={data[2].image.dimensions.height}
          className="absolute rounded-lg top-[435px] left-12"
        />
      </div>
    </div>
  );
}
