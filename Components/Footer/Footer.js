import FooterTab from "./FooterTab";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    title: "quick links",
    items: [
      { title: "home", link: "/" },
      { title: "gallery", link: "/gallery" },
      { title: "about us", link: "/about" },
      { title: "contacts", link: "/contacts" },
    ],
  },
  {
    title: "services",
    items: [
      { title: "production", link: "/production" },
      { title: "repair", link: "/repair" },

      { title: "robotics", link: "/robotics" },

      { title: "something", link: "/something" },
    ],
  },
  {
    title: "contact info",
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
      <div className="max-w-[1440px] w-full py-8 flex justify-around items-end">
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
            <div>PVM mokėtojo kodas: LT100010561112</div>
            <div>Įmonės kodas: 304374938</div>
            <Link href="/privacy" className="hover:text-onHover">
              Privacy Policy
            </Link>
          </div>
        </div>
        {data.map((item, index) => (
          <FooterTab key={index} data={item} />
        ))}
      </div>
      <div className="w-full border-t border-gray1 max-w-[1440px] text-center p-4">
        Prodtech Engineering © 2023 All rights reserved.
      </div>
    </div>
  );
}
