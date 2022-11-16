import React from "react";

type Props = {
  technology: string;
};

const TechDiv = (props: Props) => {
  return (
    <div className="rounded-2xl px-2 py-1 text-sm flex items-start justify-center bg-gray-200">
      <span className="pb-2">{props.technology}</span>
    </div>
  );
};

export default TechDiv;
