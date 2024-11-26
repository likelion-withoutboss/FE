import React from "react";

export default function Title({ text }) {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-8 text-center flex flex-col ">
      <span className="text-amber-500">Like Lion</span>
      <span className="">{text}</span>
    </h1>
  );
}
