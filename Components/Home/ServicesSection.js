import PostsTitles from "../Components/PostsTitles";
import ServicesItem from "./ServicesItem";

export default function ServicesSection() {
  return (
    <div className="py-20 text-white bg-primary">
      <div className="max-w-[1440px] px-8 flex flex-col m-auto gap-16">
        <PostsTitles heading="what do we do" title="Services We offer" />
        <div className="flex flex-wrap justify-center w-full gap-8 xl:justify-between ">
          <ServicesItem
            img="/services1.jpg"
            name="designing"
            link="/services/designing"
          />
          <ServicesItem
            img="/t.jpg"
            name="production"
            link="/services/production"
          />
          <ServicesItem
            img="/ap1.jpg"
            name="automation "
            link="/services/automation"
          />
          <ServicesItem img="/ap2.jpg" name="repair" link="/services/repair" />
        </div>
      </div>
    </div>
  );
}
