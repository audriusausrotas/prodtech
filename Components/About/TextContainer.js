export default function TextContainer({ heading, title, text }) {
  return (
    <div className="flex justify-center flex-1">
      <div className="flex flex-col max-w-[550px] gap-8">
        <div className="flex items-center gap-2 before:flex before:w-8 before:h-1 before:bg-secondary ">
          {heading}
        </div>
        <div className="text-5xl">{title}</div>
        <div className="text-justify">{text}</div>
      </div>
    </div>
  );
}
