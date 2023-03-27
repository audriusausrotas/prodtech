import Button from "./Button";

export default function ContactUsElement({ card }) {
  return (
    <>
      <div className="relative flex justify-center w-full bg-white h-44">
        <div className="absolute flex flex-col items-center justify-center gap-8 px-8 py-10 text-center text-white rounded-lg sm:px-20 md:px-48 bg-gray1 top-10">
          <div className="text-3xl font-semibold ">{card.title}</div>
          <div className="max-w-lg ">{card.text}</div>
          <Button name={card.button_name} link={card.button_link} />
        </div>
      </div>
      <div className="w-full h-44 bg-primary"></div>
    </>
  );
}
