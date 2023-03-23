export default function Map({ link }) {
  return (
    <div className="relative">
      <div className="xl:w-[600px] xl:h-[400px] w-[80vw] h-[400px] rounded-lg overflow-hidden shadow-ms ">
        <iframe
          src={link}
          width="100%"
          height="100%"
          style={{ border: "0" }}
          className="z-10 bg-white"
        ></iframe>
      </div>
      <div className="absolute top-[-10px] left-[-10px] z-[-1]  w-32 h-32 rounded-lg bg-secondary "></div>
      <div className="absolute bottom-[-10px] right-[-10px] z-[-1] sm:w-[450px] w-72 h-36 sm:h-60 rounded-lg bg-secondary"></div>
    </div>
  );
}
