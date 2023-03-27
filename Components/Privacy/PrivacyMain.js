import React from "react";

export default function Privacymain({ data }) {
  return (
    <div className="max-w-[1440px] mx-auto my-20 flex flex-col gap-2  text-justify">
      {data.map((item, index) => (
        <div typeof={item.type} key={index}>
          {item.type === "heading1" && (
            <h1 className="my-8 text-5xl font-bold text-center">{item.text}</h1>
          )}
          {item.type === "heading2" && (
            <h2 className="mt-8 mb-3 text-4xl font-semibold ">{item.text}</h2>
          )}
          {item.type === "paragraph" && (
            <p className="text-xl leading-8">{item.text}</p>
          )}
          {item.type === "list-item" && (
            <li className="text-xl">{item.text}</li>
          )}
        </div>
      ))}
    </div>
  );
}
