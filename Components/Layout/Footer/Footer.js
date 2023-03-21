import FooterTab from "./FooterTab";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    title: "Greitos nuorodos",
    items: [
      { title: "Pradžia", link: "/" },
      { title: "Galerija", link: "/gallery" },
      { title: "Apie Mus", link: "/about" },
      { title: "Kontaktai", link: "/contacts" },
    ],
  },
  {
    title: "Paslaugos",
    items: [
      { title: "Projektavimas", link: "/designing" },
      { title: "Gamyba", link: "/production" },

      { title: "Automatika Ir Robotizavimas", link: "/automation" },

      { title: "Remontas Ir Techninė Priežiūra", link: "/repair" },
    ],
  },
  {
    title: "kontaktai",
    items: [
      {
        title: "Pasagų g. 4, Riešės k., LT-14265 Vilniaus r.",
        link: "/contacts",
      },
      { title: "info@prodtech.lt", link: "mailto: info@prodtech.lt" },
      { title: "+370 620 87532", link: "tel: +370 620 87532" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col items-center text-lg text-white bg-primary">
      <div className="max-w-[1440px] w-full py-20 md:py-8 flex justify-around items-end gap-4 sm:text-left text-center  flex-wrap">
        <div className=" w-fit">
          <div className="h-28 ">
            <Link passHref href="/">
              <Image
                src="/logo small.png"
                alt="Prodtech logo"
                className="object-contain w-full h-full"
                width={200}
                height={83}
              />
            </Link>
          </div>
          <div className="gap-1">
            <div>PVM mokėtojo kodas: LT100015477019</div>
            <div>Įmonės kodas: 306124100</div>
            <Link href="/privacy" className="hover:text-onHover">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="hidden xl:block">
          <FooterTab data={data[0]} />
        </div>
        <div className="hidden xl:block">
          <FooterTab data={data[1]} />
        </div>
        <div className="hidden sm:block">
          <FooterTab data={data[2]} />
        </div>
      </div>
      <div className="w-full border-t border-gray1 max-w-[1440px] text-center p-4">
        Prodtech Engineering © 2023 All rights reserved.
      </div>
    </div>
  );
}
