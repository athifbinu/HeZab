import React from "react";
import rightImg from "../assets/Images/Ali_AlHenzab.png";
import icon from "../assets/Images/thout.png"
const Thoughts = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-8">
      <div className="w-1/2">
        <img src={rightImg} alt="Right Image" className="w-full h-full " />
      </div>

      <div className="w-1/2 pr-8 flex">
      <div className="text-black font-extrabold text-2xl  ">
      <h3>We Approach Experts To Great Value For
            <br />
            Your Business And Best Solutions For 
            <br />
            Developing Business "
           </h3>
      </div>

      <div style={{marginTop:"-23px"}}>
                <img className="h-8" src={icon} alt="" />
             </div>
      </div>
    </div>
  );
};

export default Thoughts;
