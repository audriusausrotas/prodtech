import PostsTitles from "../Components/PostsTitles";
import ServicesItem from "./ServicesItem";

export default function ServicesSection({ data }) {
  return (
    <div className="py-20 text-white bg-primary">
      <div className="max-w-[1440px] px-8 flex flex-col m-auto gap-16">
        <PostsTitles data={data.primary} />
        <div className="flex flex-wrap justify-center w-full gap-8 xl:justify-around">
          {data.items.map((item, index) => (
            <ServicesItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
