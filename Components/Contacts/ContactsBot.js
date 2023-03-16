import Map from "./Map";
import ConntactContacts from "./ConntactContacts";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";

export default function ContactsBot() {
  return (
    <div className="flex flex-col items-center gap-20 px-4 py-20 text-center sm:justify-around xl:gap-8 xl:flex-row xl:items-start sm:px-0">
      <div className="flex flex-col xl:mt-8 gap-14 ">
        <div className="flex flex-col gap-4 ">
          <p className="flex items-center gap-2 m-auto text-2xl before:flex before:w-8 before:h-1 before:bg-secondary sm:m-0">
            Hey there
          </p>
          <h1 className="text-5xl font-bold">Let's Get in Touch</h1>
        </div>
        <div className="flex flex-col gap-6 ">
          <ConntactContacts
            icon={<ImLocation2 />}
            text="Pasagų 4, Riešės k, LT-14265 Vilniaus r."
          />
          <ConntactContacts
            icon={<FaPhoneAlt />}
            text="+370 620 87532"
            link="tel: +370 620 87532"
          />
          <ConntactContacts
            icon={<ImLocation2 />}
            text="Info@prodtech.lt"
            link="mailto: Info@Prodtech.lt"
          />
        </div>
      </div>
      <Map />
    </div>
  );
}
