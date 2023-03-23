import Link from "next/link";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ConntactContacts({ text, link }) {
  return (
    <div className="flex items-center gap-2 m-auto sm:m-0">
      <div className="text-secondary">
        {!link ? (
          <ImLocation2 />
        ) : text.includes("@") ? (
          <MdEmail />
        ) : (
          <FaPhoneAlt />
        )}
      </div>
      {link ? <Link href={link}>{text}</Link> : <div>{text}</div>}
    </div>
  );
}
