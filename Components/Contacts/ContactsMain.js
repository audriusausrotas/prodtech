import ContactsTop from "./ContactsTop";
import ContactsBot from "./ContactsBot";

export default function ContactsMain({ data }) {
  return (
    <div className="max-w-[1440px] flex flex-col m-auto ">
      <ContactsTop data={data} />
      <ContactsBot data={data} />
    </div>
  );
}
