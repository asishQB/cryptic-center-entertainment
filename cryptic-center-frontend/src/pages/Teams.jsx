import React from "react";
import AboutUs from "../assets/AboutUs.png";
import AboutUs2 from "../assets/AboutUs2.png";

const Teams = () => {
  return (
    <div className="bg-teams-bg-color w-full h-screen flex justify-center items-center flex-col gap-10 px-10">
      <div className="text-white font-Nokora text-6xl">
        Meet Our Creative Team Members
      </div>
      <div className="flex space-x-6 animate-infinite-scroll w-3/5 h-3/5">
        <img src={AboutUs} alt="teams1" />
        <img src={AboutUs2} alt="teams2" />
        <img src={AboutUs} alt="teams1" />
        <img src={AboutUs2} alt="teams2" />
      </div>
    </div>
  );
};

export default Teams;
