import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

export default function SubMenu({
  clearTimer,
  hoverOff,
  subMenu,
  open,
  setOpen,
}) {
  function closeMenus() {
    hoverOff();
    open && setOpen();
  }
  return (
    <div
      className="z-50 flex flex-col p-4 overflow-hidden text-lg border-b rounded-lg lg:absolute bg-gray2 lg:bg-primary top-15 border-gray1"
      onMouseEnter={!open ? clearTimer : () => {}}
      onMouseLeave={!open ? hoverOff : () => {}}
    >
      {subMenu.map((item) => (
        <Link
          key={item.title}
          onClick={closeMenus}
          href={item.link}
          className="flex items-center gap-2 px-4 py-2 rounded-md lg:justify-between hover:bg-onHover "
        >
          {open && <FaCircle size={10} />}
          {item.title}
          {!open && <BsArrowRightCircleFill size={18} />}
        </Link>
      ))}
    </div>
  );
}
