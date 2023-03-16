import Image from "next/image";

export default function AboutHeader() {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex-1 ">
        <Image
          src="/about1.jpg"
          alt="image of Prodtech personal"
          width={790}
          height={699}
          className="object-cover object-center max-h-600 max-w-[800] brightness-60 saturate-60"
        />
      </div>

      <div className="flex flex-col items-center justify-center flex-1 gap-6">
        <h2 className="text-6xl font-semibold">About Us</h2>
        <p className="leading-10 text-center w-96">
          Learn more about how we started and what we can bring to the table.
        </p>
      </div>
    </div>
  );
}
