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
      className="relative flex items-center gap-2 cursor-pointer"
      onClick={toggleDropdown}
    >
      <Image
        src={language === "LT" ? "/LT.jpg" : "/EN.jpg"}
        alt="flag"
        width={60}
        height={36}
        className="w-6 h-4 "
      />
      <div className="flex w-10 gap-1 select-none ">
        {language}
        <NavigationArrow open={open} />
        {open && (
          <div className="absolute left-0 flex flex-col p-4 overflow-hidden rounded-md cursor-default w-30 bg-primary top-10">
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
