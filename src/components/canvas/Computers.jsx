import React from "react";
import me from "../../assets/tech/me.png";

const ComputersCanvas = () => {
  return (
    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <img className="w-[40%] h-[40%]" src={me} alt="menghor phat" />
    </div>
  );
};

export default ComputersCanvas;
