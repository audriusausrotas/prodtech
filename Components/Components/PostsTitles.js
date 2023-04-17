import Button from "./Button";

export default function PostsTitles({ data }) {
  return (
    <div className="flex flex-col max-w-[550px]  xl:self-start self-center items-center  gap-8 xl:items-start">
      {data.info && (
        <p className="flex items-center gap-2 before:block before:w-8 before:h-1 before:bg-secondary ">
          {data.info}
        </p>
      )}

      <h2 className="text-4xl text-center sm:text-start">{data.title}</h2>
      {data.text && <p className="text-justify">{data.text}</p>}
      {!data.info && <Button name={data.button_name} link={data.button_link} />}
    </div>
  );
}
