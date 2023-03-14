import Link from "next/link";
import SubMenu from "./SubMenu";
import { useState } from "react";
import { menuItems } from "./MenuItems";
import NavigationArrow from "./NavigationArrow";

export default function Menu({ language }) {
  const [hover, setHover] = useState(false);

  let submenu;

  function hoverOff() {
    setHover(false);
  }

  function hoverOffDelay() {
    submenu = setTimeout(() => setHover(false), 100);
  }

  function hoverOn() {
    setHover(true);
  }

  function clearTimer() {
    clearTimeout(submenu);
  }

  const menu =
    language === menuItems[0].name
      ? [...menuItems[0].items]
      : [...menuItems[1].items];

  return (
    <div className="flex gap-16 capitalize">
      {menu.map((item) =>
        item.subMenu ? (
          <div key={item.title}>
            <div
              onMouseEnter={hoverOn}
              onMouseOut={hoverOffDelay}
              className="relative flex items-center hover:cursor-pointer"
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
              />
            )}
          </div>
        ) : (
          <Link key={item.title} href={item.link}>
            {item.title}
          </Link>
        )
      )}
    </div>
  );
}
