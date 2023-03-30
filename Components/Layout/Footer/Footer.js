import FooterTab from "./FooterTab";
import Link from "next/link";
import Logo from "../../../public/logo.svg";

export default function Footer({ data }) {
  return (
    <div className="flex flex-col items-center text-lg text-white bg-primary">
      <div className="max-w-[1440px] w-full py-20 md:py-8 flex justify-around items-end gap-4 xl:text-left text-center flex-wrap">
        <div className=" w-fit">
          <div className="flex items-center h-28">
            <Link passHref href="/">
              <Logo className="w-60" />
            </Link>
          </div>
          <div className="gap-1">
            <h5>{data.vat_code}</h5>
            <h5>{data.company_name}</h5>
            <Link href={data.privacy_link} className="hover:text-onHover">
              {data.privacy_name}
            </Link>
          </div>
        </div>

        {data.slices.map((item, index) => (
          <FooterTab key={index} data={item} />
        ))}
      </div>
      <h4 className="w-full border-t border-gray1 max-w-[1440px] text-center p-4">
        {data.copyright}
      </h4>
    </div>
  );
}
