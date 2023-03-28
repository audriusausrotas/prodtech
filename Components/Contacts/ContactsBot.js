import Map from "./Map";
import ConntactContacts from "./ConntactContacts";

export default function ContactsBot({ data }) {
  return (
    <div className="flex flex-col items-center gap-20 py-20 text-center sm:text-start md:px-4 sm:justify-around xl:gap-8 xl:flex-row xl:items-start sm:px-0">
      <div className="flex flex-col xl:mt-8 gap-14">
        <div className="flex flex-col gap-4">
          <h5 className="flex items-center gap-2 m-auto text-2xl before:flex before:w-8 before:h-1 before:bg-secondary sm:m-0">
            {data.short_text}
          </h5>
          <h2 className="text-5xl font-bold">{data.short_text_2}</h2>
        </div>
        <div className="flex flex-col gap-6 ">
          {data.slices.map((item, index) => (
            <ConntactContacts
              key={index}
              text={item.primary.title}
              link={item.primary.link}
            />
          ))}
        </div>
      </div>
      <Map link={data.map_link} />
    </div>
  );
}
