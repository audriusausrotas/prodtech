import Image from "next/image";

export default function ImageContainer() {
  return (
    <div className="order-last hidden xl:order-none sm:flex">
      <div className="relative h-[630px] w-[550px] m-auto ">
        <Image
          src="/ap1.jpg"
          alt=""
          width={410}
          height={503}
          className="absolute top-0 left-0 rounded-lg w-[400px] max-h-[500px]"
        />
        <Image
          src="/ap2.jpg"
          alt=""
          width={296}
          height={270}
          className="absolute rounded-lg left-60 top-80"
        />
        <Image
          src="/ap3.jpg"
          alt=""
          width={293}
          height={191}
          className="absolute rounded-lg top-[435px] left-12"
        />
      </div>
    </div>
  );
}
