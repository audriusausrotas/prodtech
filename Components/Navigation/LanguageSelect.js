import Image from "next/image";
import { useState } from "react";
import NavigationArrow from "./NavigationArrow";
import LanguageSelectItem from "./LanguageSelectItem";

export default function LanguageSelect({ setLanguage, language }) {
  const [open, setOpen] = useState(false);

  function toggleDropdown() {
    setOpen(!open);
  }

  return (
    <div
      className="relative z-50 flex items-center gap-3 text-xl cursor-pointer"
      onClick={toggleDropdown}
    >
      <Image
        src={language === "LT" ? "/LT.jpg" : "/EN.jpg"}
        alt="current language flag"
        width={60}
        height={36}
        className="w-6 h-4 "
      />
      <div className="flex gap-1 select-none ">
        {language}
        <NavigationArrow open={open} />
        {open && (
          <div className="absolute right-0 flex flex-col overflow-hidden rounded-b-md cursor-default  lg:bg-primary top-[60px] bg-gray2">
            <LanguageSelectItem
              value="LT"
              toggle={toggleDropdown}
              setLanguage={setLanguage}
            />
            <LanguageSelectItem
              value="EN"
              toggle={toggleDropdown}
              setLanguage={setLanguage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
