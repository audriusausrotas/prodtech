import ServicesPicture from "../ServicesPicture";
import ServicesText from "../ServicesText";

export default function ProductionMain() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-20 m-auto ">
        <img
          src="/servicesHeader.jpg"
          alt=""
          className="object-contain object-cover object-center w-full h-[430px]"
        />

        <div className="flex flex-col gap-4 px-20 ">
          <div className="flex items-center gap-2 m-auto text-2xl before:flex before:w-8 before:h-1 before:bg-secondary sm:m-0">
            Our Services
          </div>
          <div className="text-5xl font-semibold">Production</div>
        </div>
      </div>
      <div className="w-full ">
        <div className="flex justify-between m-auto max-w-[1440px] gap-4 py-28  px-20">
          <ServicesPicture shadow={true} />
          <ServicesText title="Production of Industrial Equipment" />
        </div>
      </div>
      <div className="z-0 w-full text-white bg-primary">
        <div className="flex justify-between m-auto max-w-[1440px] gap-4 py-28 px-20">
          <ServicesText title="Welding" />
          <ServicesPicture shadow={false} />
        </div>
      </div>
      <div className="w-full ">
        <div className="flex justify-between m-auto max-w-[1440px] gap-4 py-28  px-20">
          <ServicesPicture shadow={true} />
          <ServicesText title="CNC Turning and Milling" />
        </div>
      </div>
    </div>
  );
}
