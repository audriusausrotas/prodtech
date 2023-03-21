import Link from "next/link";
import SubMenu from "./SubMenu";
import { useState } from "react";
import { menuItems } from "./MenuItems";
import NavigationArrow from "./NavigationArrow";

export default function Menu({ language, open, setOpen }) {
  const [hover, setHover] = useState(false);

  let submenu;

  function hoverOn(e) {
    setHover(true);
  }

  function hoverOff() {
    setHover(false);
  }

  function hoverOffDelay() {
    submenu = setTimeout(() => setHover(false), 100);
  }

  function hoverToggle() {
    setHover((prev) => !prev);
  }

  function clearTimer() {
    clearTimeout(submenu);
  }

  const menu =
    language === menuItems[0].name
      ? [...menuItems[0].items]
      : [...menuItems[1].items];

  return (
    <div className="absolute left-0 flex flex-col w-2/3 overflow-hidden text-xl capitalize rounded-br-lg select-none lg:w-auto bg-gray2 lg:flex-row lg:gap-16 lg:static top-24 lg:bg-primary">
      {menu.map((item) =>
        item.subMenu ? (
          <div key={item.title}>
            <div
              onClick={hoverToggle}
              onMouseEnter={!open ? hoverOn : () => {}}
              onMouseOut={!open ? hoverOffDelay : () => {}}
              className="relative flex items-center justify-between px-6 py-3 border-b hover:cursor-pointer hover:text-onHover lg:p-0 lg:border-0 border-gray1 lg:justify-start"
            >
              {item.title}
              <NavigationArrow open={hover} />
            </div>
            {item.subMenu && hover && (
              <SubMenu
                subMenu={item.subMenu}
                setHover={setHover}
                clearTimer={clearTimer}
                hoverOff={hoverOff}
                open={open}
                setOpen={setOpen}
              />
            )}
          </div>
        ) : (
          <Link
            onClick={setOpen}
            key={item.title}
            href={item.link}
            className="px-6 py-2 border-b hover:text-onHover lg:p-0 lg:border-0 border-gray1 "
          >
            {item.title}
          </Link>
        )
      )}
    </div>
  );
}
