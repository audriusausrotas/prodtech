import Button from "../Components/Button";

export default function ImageElement({ img }) {
  console.log(img);
  return (
    <div className="relative h-full transition-all group">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full h-full rounded-lg"
      />
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%]  opacity-90  invisible group-hover:visible ">
        <Button />
      </div>
    </div>
  );
}
