import React from "react";
import globe from "../assets/Images/globe.png";

const Globel = () => {
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="container mx-auto ">
        <div className="mb-7 mt-20">
          <h1 className="text-center text-black font-extrabold text-4xl">Global Presence</h1>
        </div>

        <div className="flex flex-wrap justify-center text-yellow-700">
          <p className="mx-4">Qatar</p>
          <p className="mx-4">Egypt</p>
          <p className="mx-4">Jordan</p>
          <p className="mx-4">Oman</p>
          <p className="mx-4">Saudi Arabia</p>
          <p className="mx-4">Qatar</p>
          <p className="mx-4">Egypt</p>
          <p className="mx-4">Jordan</p>
          <p className="mx-4">Oman</p>
          <p className="mx-4">Saudi Arabia</p>
        </div>

        <div className="flex justify-center  ">
          <img src={globe} style={{marginTop:"-60px",width:"590px"}} alt="Globe" />
        </div>
      </div>
    </div>
  );
};

export default Globel;
