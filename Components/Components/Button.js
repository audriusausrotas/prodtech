import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Button() {
  return (
    <Link
      href="/contacts"
      className="flex items-center justify-between w-48 px-5 py-2 text-xl text-white capitalize border-2 rounded-lg cursor-pointer group/btn border-onHover hover:bg-onHover bg-primary"
    >
      Contact Us
      <div className="text-onHover hover:text-primary group-hover/btn:text-primary ">
        <BsArrowRightCircleFill size={22} />
      </div>
    </Link>
  );
}
