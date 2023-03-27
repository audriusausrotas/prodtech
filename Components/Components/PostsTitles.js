import Button from "./Button";

export default function PostsTitles({ data }) {
  return (
    <div className="flex flex-col max-w-[550px]  xl:self-start self-center items-center capitalize gap-8 xl:items-start">
      {data.info && (
        <div className="flex items-center gap-2 before:block before:w-8 before:h-1 before:bg-secondary ">
          {data.info}
        </div>
      )}

      <div className="text-4xl text-center sm:text-start">{data.title}</div>
      {data.text && <div className="text-justify">{data.text}</div>}
      {!data.info && <Button name={data.button_name} link={data.button_link} />}
    </div>
  );
}
