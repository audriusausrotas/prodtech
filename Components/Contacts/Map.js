export default function Map() {
  return (
    <div className="relative">
      <div className="h-[390px] w-[580px]  rounded-lg overflow-hidden shadow-ms z-50 flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4966.582593589076!2d25.238405979979067!3d54.81130798926894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd932d21daece1%3A0x6eaa0cbdac305a84!2sLemara!5e0!3m2!1sen!2slt!4v1660561984797!5m2!1sen!2slt"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="absolute top-[-10px] left-[-10px] z-[-1]  w-32 h-32 rounded-lg bg-secondary"></div>
      <div className="absolute top-[150px] right-[-10px] z-[-1] w-[490px] h-[250px] rounded-lg bg-secondary"></div>
    </div>
  );
}
