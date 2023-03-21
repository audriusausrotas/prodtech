import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import LanguageSelect from "./LanguageSelect";
import HamburgerMenu from "./HamburgerMenu";

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
    <div className="sticky top-0 z-50 bg-primary">
      <div className="max-w-[1440px] h-24 m-auto flex items-center  text-white justify-around ">
        <HamburgerMenu language={language} />
        <Link passHref href="/">
          <Image
            src="/logo small.png"
            alt="Prodtech logo"
            width={200}
            height={83}
          />
        </Link>

        <div className="flex gap-12 lg:gap-20">
          <div className="hidden lg:flex">
            <Menu language={language} />
          </div>
          <LanguageSelect language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </div>
  );
}
