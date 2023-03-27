export default function Map({ link }) {
  return (
    <div className="relative">
      <div className="xl:w-[600px] xl:h-[400px] w-[90vw] h-[400px] rounded-lg overflow-hidden shadow-ms ">
        <iframe
          src={link}
          width="100%"
          height="100%"
          style={{ border: "0" }}
          className="z-10 bg-white"
        ></iframe>
      </div>
      <div className="absolute w-32 h-32 rounded-lg -top-2 -left-2 -z-10 bg-secondary "></div>
      <div className="absolute -bottom-2 -right-2 -z-10 md:w-[450px] w-44 xs:w-60 h-36  rounded-lg bg-secondary"></div>
    </div>
  );
}
