import React from "react";

const Icon = ({ href, icon: IconComponent }) => {
  return (
    <a
      className={href ? "cursor-pointer" : ""}
      href={href ? href : ""}
      target="_blank"
      rel="noopener noreferrer"
    >
      {IconComponent && <IconComponent size="26" />}
    </a>
  );
};

export default Icon;
