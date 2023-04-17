import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function ServicesItem({ data }) {
  return (
    <div className="max-w-[280px] ">
      <Image
        src={data.item_picture.url}
        alt={data.item_picture.alt}
        width={data.item_picture.dimensions.width}
        height={data.item_picture.dimensions.height}
        className="object-cover object-center rounded-t-lg h-96"
      />
      <Link
        href={data.item_link}
        className="flex items-center justify-between w-full px-6 py-3 text-xl text-white border-2 rounded-b-lg cursor-pointer group border-onHover hover:bg-onHover bg-primary"
      >
        {data.item_title}
        <div className="text-onHover hover:text-primary group-hover:text-primary">
          <BsArrowRightCircleFill size={22} />
        </div>
      </Link>
    </div>
  );
}
