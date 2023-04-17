import ServicesPicture from "./ServicesPicture";
import Image from "next/image";
import PostsTitles from "../Components/PostsTitles";

export default function ServicesDefaultPage({ data }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-20 m-auto w-full max-w-[1440px] ">
        <Image
          priority
          src={data.image.url}
          alt={data.image.alt}
          width={data.image.dimensions.width}
          height={data.image.dimensions.height}
          className="object-cover object-center w-full h-[430px] rounded-b-lg"
        />

        <div className="flex flex-col  gap-4 px-[5%] text-center xl:text-start">
          <h5 className="flex items-center justify-center gap-2 text-2xl xl:justify-start before:flex before:w-8 before:h-1 before:bg-secondary ">
            {data.title}
          </h5>
          <h2 className="text-5xl font-semibold ">{data.text}</h2>
        </div>
      </div>

      {data.slices.map((item, index) => (
        <div className="w-full odd:bg-primary odd:text-white" key={index}>
          <div
            className={`flex flex-col  justify-around m-auto max-w-[1440px] gap-10 sm:gap-20 xl:gap-8 py-20 px-4 ${
              index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
            } `}
          >
            <ServicesPicture
              data={item.primary.image}
              shadow={index % 2 === 0 ? true : false}
            />
            <PostsTitles data={item.primary} />
          </div>
        </div>
      ))}
    </div>
  );
}
