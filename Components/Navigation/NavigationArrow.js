import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function NavigationArrow({ open }) {
  return (
    <div className="pointer-events-none">
      {open ? (
        <MdOutlineKeyboardArrowUp size={22} className="text-secondary " />
      ) : (
        <MdOutlineKeyboardArrowDown size={22} />
      )}
    </div>
  );
}
