import React from "react";
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className=" bg-red-300">
      <div
        className="flex space-x-16 cursor-pointer accordion_title px-4"
        onClick={() => setIsActive(!isActive)}
      >
        <div> {title} </div>
        <div> {isActive ? "-" : "+"} </div>
      </div>
      {isActive && <div>{content} </div>}
    </div>
  );
};

export default Accordion;
