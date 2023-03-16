import Image from "next/image";

export default function AboutHeader() {
  return (
    <div className="flex relative items-center max-w-[1440px] m-auto">
      <div className="flex flex-1 ">
        <Image
          src="/about1.jpg"
          alt="image of Prodtech personal"
          width={790}
          height={699}
          className="object-cover object-center max-h-[600] max-w-[800] brightness-60 saturate-60"
        />
      </div>

      <div className="absolute items-center justify-center flex-1 gap-6 m-auto sm:translate-x-[-50%] md:translate-x-0 text-white md:text-black text-center  md:static  top-1/4  sm:left-2/4">
        <h2 className="text-6xl font-semibold">About Us</h2>
        <p className="max-w-lg p-0 m-auto leading-10 text-center md:p-10">
          Learn more about how we started and what we can bring to the table.
        </p>
      </div>
    </div>
  );
}
