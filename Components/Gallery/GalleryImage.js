export default function GalleryImage({ data, clickHandler, id }) {
  return (
    <div className="max-w-xs ">
      <img
        src={data}
        id={id}
        onClick={clickHandler}
        alt=""
        className="object-cover object-center w-full h-full rounded-lg cursor-pointer"
      />
    </div>
  );
}
