import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function SubMenu({ clearTimer, hoverOff, subMenu }) {
  return (
    <div
      className="absolute flex flex-col p-4 overflow-hidden rounded-md bg-primary top-15"
      onMouseEnter={clearTimer}
      onMouseLeave={hoverOff}
    >
      {subMenu.map((item) => (
        <Link
          key={item.title}
          href={item.link}
          className="flex items-center justify-between gap-2 px-4 py-2 rounded-md hover:bg-onHover w- min-w-[20rem]"
        >
          {item.title}
          <BsArrowRightCircleFill size={28} />
        </Link>
      ))}
    </div>
  );
}
