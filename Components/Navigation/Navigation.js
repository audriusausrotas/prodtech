import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import LanguageSelect from "./LanguageSelect";

export default function Navigation() {
  const router = useRouter();
  const [language, setLanguage] = useState("LT");

  useEffect(() => {
    let display = "";
    switch (language) {
      case "LT":
        display = "lt";
        break;
      case "EN":
        display = "en";
        break;
      default:
        break;
    }
    router.push(router.asPath, router.asPath, { locale: display });
  }, [language]);

  return (
    <div className=" bg-primary">
      <div className="w-[1440px] h-24 m-auto flex items-center text-[18px] text-white justify-around ">
        <Link passHref href="/">
          <Image
            src="/logo small.png"
            alt="Prodtech logo"
            width={200}
            height={83}
          />
        </Link>

        <div className="flex gap-20">
          <Menu language={language} />
          <LanguageSelect language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </div>
  );
}
