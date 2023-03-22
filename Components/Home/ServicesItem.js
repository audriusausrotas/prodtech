import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function ServicesItem({ img, name, link }) {
  return (
    <div className="max-w-[280px] ">
      <img
        src={img}
        alt=""
        className="object-cover object-center rounded-t-lg h-96"
      />
      <Link
        href={link}
        className="flex items-center justify-between w-full py-3 text-xl text-white capitalize border-2 rounded-b-lg cursor-pointer group px-7 border-onHover hover:bg-onHover bg-primary"
      >
        {name}
        <div className="text-onHover hover:text-primary group-hover:text-primary">
          <BsArrowRightCircleFill size={22} />
        </div>
      </Link>
    </div>
  );
}
