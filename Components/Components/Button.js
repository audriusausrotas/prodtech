import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Button({ name, onClick }) {
  return (
    <div
      cnClick={onClick}
      className="flex items-center gap-6 py-2 text-xl border-2 rounded-lg cursor-pointer group px-7 border-onHover hover:bg-onHover bg-primary"
    >
      {onClick ? (
        <div className="text-white capitalize">{name}</div>
      ) : (
        <Link href="/contacts" className="text-white capitalize">
          Contact Us
        </Link>
      )}

      <div className="text-onHover hover:text-primary group-hover:text-primary">
        <BsArrowRightCircleFill size={22} />
      </div>
    </div>
  );
}
