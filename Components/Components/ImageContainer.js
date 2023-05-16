import Image from "next/image";

export default function ImageContainer({ data }) {
  const cssClasses = [
    "absolute top-0 left-0 rounded-lg w-[350px] h-[400px] object-cover ",
    "absolute rounded-lg left-60 top-44 object-cover w-[260px] h-[350px] ",
    "absolute rounded-lg top-[350px] left-12 object-cover w-[350px] h-[220px]  ",
  ];

  return (
    <div className="hidden sm:flex">
      <div className="relative h-[630px] w-[550px] m-auto ">
        {data.map((item, index) => (
          <Image
            key={index}
            src={item.image.url}
            alt={item.image.alt}
            width={index === 0 ? "350" : index === 1 ? "260" : "350"}
            height={index === 0 ? "400" : index === 1 ? "350" : "220"}
            className={cssClasses[index]}
          />
        ))}
      </div>
    </div>
  );
}
