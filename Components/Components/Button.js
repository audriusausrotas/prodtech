import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Button({ link, name }) {
  return (
    <Link
      href={link}
      className="flex items-center justify-between w-48 px-5 py-2 text-xl text-white capitalize transition-all duration-200 border-2 rounded-lg cursor-pointer group/btn border-onHover hover:bg-onHover bg-primary"
    >
      {name}
      <div className="transition-all duration-200 text-onHover hover:text-primary group-hover/btn:text-primary">
        <BsArrowRightCircleFill size={22} />
      </div>
    </Link>
  );
}
