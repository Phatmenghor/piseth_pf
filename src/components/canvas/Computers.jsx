import React from "react";
import me from "../../assets/tech/me.png";

const ComputersCanvas = () => {
  return (
    <div className="absolute xs:bottom-10 bottom-32  w-full flex justify-end items-end">
      <img className="w-[38%] h-[38%]" src={me} alt="Sar Sopiseth" />
    </div>
  );
};

export default ComputersCanvas;
