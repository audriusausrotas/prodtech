import FooterTab from "./FooterTab";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ data }) {
  return (
    <div className="flex flex-col items-center text-lg text-white bg-primary">
      <div className="max-w-[1440px] w-full py-20 md:py-8 flex justify-around items-end gap-4 xl:text-left text-center  flex-wrap">
        <div className=" w-fit">
          <div className="h-28 ">
            <Link passHref href="/">
              <Image
                src={data.logo.url}
                alt={data.logo.alt}
                className="object-contain w-full h-full"
                width={data.logo.dimensions.width}
                height={data.logo.dimensions.height}
              />
            </Link>
          </div>
          <div className="gap-1">
            <div>{data.vat_code}</div>
            <div>{data.company_name}</div>
            <Link href={data.privacy_link} className="hover:text-onHover">
              {data.privacy_name}
            </Link>
          </div>
        </div>

        {data.slices.map((item, index) => (
          <FooterTab key={index} data={item} />
        ))}
      </div>
      <div className="w-full border-t border-gray1 max-w-[1440px] text-center p-4">
        {data.copyright}
      </div>
    </div>
  );
}
