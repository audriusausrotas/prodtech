import Image from "next/image";

export default function LanguageSelectItem({ value, toggle, setLanguage }) {
  function clickHandler(e) {
    setLanguage(e.target.innerText);
    toggle();
  }

  return (
    <div
      className="flex items-center w-24 gap-3 px-5 py-2 cursor-pointer hover:bg-onHover"
      onClick={clickHandler}
    >
      <Image
        src={`/${value}.jpg`}
        alt=" Lithuanian flag"
        width={60}
        height={36}
        className="w-6 h-4 pointer-events-none"
      />
      {value}
    </div>
  );
}
