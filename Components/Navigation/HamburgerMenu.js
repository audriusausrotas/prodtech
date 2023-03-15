import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import Menu from "./Menu";

export default function HamburgerMenu({ language }) {
  const [open, setOpen] = useState(false);

  function openHandler() {
    setOpen((prev) => !prev);
  }

  return (
    <>
      <div className="block lg:hidden" onClick={openHandler}>
        {open ? (
          <IoMdCloseCircle
            size={30}
            className="pointer-events-none text-secondary"
          />
        ) : (
          <GiHamburgerMenu size={28} className="pointer-events-none" />
        )}
      </div>
      {open && <Menu language={language} open={open} setOpen={openHandler} />}
    </>
  );
}
