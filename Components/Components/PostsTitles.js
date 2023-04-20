import Button from "./Button";

export default function PostsTitles({ data }) {
  return (
    <div className="flex flex-col max-w-[550px]  xl:self-start self-center items-center  gap-5 xl:items-start">
      {data.info && (
        <p className="flex items-center gap-2 before:block before:w-8 before:h-1 before:bg-secondary ">
          {data.info}
        </p>
      )}

      <h2 className="text-4xl text-center sm:text-start ">{data.title}</h2>
      {data.text2 &&
        data.text2.map((item, index) => (
          <div typeof={item.type} key={index} className="">
            {item.type === "heading3" && (
              <h3 className="my-8 text-2xl text-justify">{item.text}</h3>
            )}
            {item.type === "heading4" && (
              <h4 className="my-8 text-xl text-justify">{item.text}</h4>
            )}
            {item.type === "heading5" && (
              <h5 className="my-8 text-lg text-justify">{item.text}</h5>
            )}
            {item.type === "heading6" && (
              <h6 className="my-8 text-lg text-justify">{item.text}</h6>
            )}
            {item.type === "heading2" && (
              <h2 className="mt-8 mb-3 text-4xl font-semibold text-justify">
                {item.text}
              </h2>
            )}
            {item.type === "paragraph" && (
              <p className="text-xl leading-8 text-justify">{item.text}</p>
            )}
            {item.type === "list-item" && (
              <li className="text-xl">{item.text}</li>
            )}
          </div>
        ))}
      {!data.info && <Button name={data.button_name} link={data.button_link} />}
    </div>
  );
}
