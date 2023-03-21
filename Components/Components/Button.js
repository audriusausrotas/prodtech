import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Button({ name, clickHandler }) {
  return (
    <>
      {clickHandler ? (
        <div
          cnClick={clickHandler}
          className="flex items-center gap-6 py-2 text-xl text-white capitalize border-2 rounded-lg cursor-pointer w-fit group px-7 border-onHover hover:bg-onHover bg-primary"
        >
          {name}
          <div className="text-onHover hover:text-primary group-hover:text-primary">
            <BsArrowRightCircleFill size={22} />
          </div>
        </div>
      ) : (
        <Link
          href="/contacts"
          className="flex items-center gap-6 py-2 text-xl text-white capitalize border-2 rounded-lg cursor-pointer w-fit group px-7 border-onHover hover:bg-onHover bg-primary"
        >
          Contact Us
          <div className="text-onHover hover:text-primary group-hover:text-primary">
            <BsArrowRightCircleFill size={22} />
          </div>
        </Link>
      )}
    </>
  );
}
