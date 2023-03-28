import Image from "next/image";

export default function ImageContainer({ data }) {
  const cssClasses = [
    "absolute top-0 left-0 rounded-lg w-[400px] max-h-[500px]",
    "absolute rounded-lg left-60 top-80",
    "absolute rounded-lg top-[435px] left-12",
  ];

  return (
    <div className="hidden sm:flex">
      <div className="relative h-[630px] w-[550px] m-auto ">
        {data.map((item, index) => (
          <Image
            key={index}
            src={item.image.url}
            alt={item.image.alt}
            width={item.image.dimensions.width}
            height={item.image.dimensions.height}
            className={cssClasses[index]}
          />
        ))}
      </div>
    </div>
  );
}
