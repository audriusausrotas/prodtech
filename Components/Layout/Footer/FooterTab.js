import Link from "next/link";

export default function FooterTab({ data }) {
  return (
    <div className="flex flex-col gap-4 w-fit max-w-[244px]">
      <div className="capitalize text-secondary">{data.title}</div>
      <div className="flex flex-col gap-1">
        {data.items.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="hover:text-onHover "
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
