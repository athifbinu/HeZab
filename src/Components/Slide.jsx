import React, { useState } from "react";
import "../slide.css";
import Team from "../assets/data";
import { IoCloseCircle } from "react-icons/io5";

const Slide = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="slider">
      <div className="flex gap-16 slide-track">
        {Team.map((member) => (
          <div
            key={member.id}
            className="w-72 cursor-pointer"
            onClick={() => openPopup(member.img)}
          >
            <img src={member.img} alt={member.name} />

            <div className="bg-gray-200 text-center">
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg ">
            <img src={selectedImage} alt="" className="w-96" />
          </div>
          <div>
            <IoCloseCircle
              className="cursor-pointer"
              size={25}
              onClick={closePopup}
              style={{ marginTop: "-200px", marginLeft: "-26px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slide;
