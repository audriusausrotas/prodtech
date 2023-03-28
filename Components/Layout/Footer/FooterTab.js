import Link from "next/link";

export default function FooterTab({ data }) {
  return (
    <div
      className={`flex-col gap-4 w-fit hidden max-w-[244px] ${
        data.items[0].link === "/kontaktai" ? "sm:flex" : "xl:flex"
      }`}
    >
      <h3 className="capitalize text-secondary">{data.primary.title}</h3>
      <div className="flex flex-col gap-1">
        {data.items.map((item, index) => (
          <Link key={index} href={item.link} className="hover:text-onHover ">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
