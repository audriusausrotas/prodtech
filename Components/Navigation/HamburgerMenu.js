import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HamburgerMenu({ language }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="block lg:hidden"
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      <GiHamburgerMenu size={28} />
    </div>
  );
}
