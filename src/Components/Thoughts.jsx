// Thoughts.js

import React from "react";
import rightImg from "../assets/Images/Ali_AlHenzab.png";
import icon from "../assets/Images/thout.png";

const Thoughts = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center py-8 mr">
      <div className="w-full md:w-1/2  pr-8 flex items-center gp">
        <div className="text-black font-extrabold text-2xl">
          <h3>We Approach Experts To Great Value For Your Business And Best Solutions For Developing Business</h3>
        </div>
        <div style={{ marginTop: "-23px" }}>
          <img className="h-8" src={icon} alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={rightImg} alt="Right Image" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Thoughts;
