import Link from "next/link";

export default function ConntactContacts({ icon, text, link }) {
  return (
    <div className="flex gap-2 m-auto sm:m-0">
      <div className="text-secondary">{icon}</div>
      {link ? <Link href={link}>{text}</Link> : <div>{text}</div>}
    </div>
  );
}
