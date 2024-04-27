import React from "react";
import Logo from "../assets/Logo.png";
import Socials from "../assets/Socials.png";
import Scroller from "../assets/Scroller.png";
import Scroller2 from "../assets/Scroller2.png";
import Scroller3 from "../assets/Scroller3.png";
import Scroller4 from "../assets/Scroller4.png";
import Scroller5 from "../assets/Scroller5.png";

const Navbar = () => {
  return (
    <div className="absolute top-0 bg-transparent w-full px-4 py-2 flex justify-between">
      <img src={Logo} alt="Logo" className="pl-12" />
      <div className="flex justify-center items-center gap-10 pr-32">
        <a href="/" className="text-green-500 hover:text-green-400 text-2xl">
          Home
        </a>
        <a
          href="/AboutUs"
          className="text-gray-300 hover:text-gray-100 text-2xl"
        >
          About Us
        </a>
        <a
          href="/Contact"
          className="text-gray-300 hover:text-gray-100 text-2xl"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

const GradientContainer = () => {
  return (
    <div className="flex flex-row overflow-hidden">
      {/* linear-gradient bg */}

      <div className="bg-gradient-to-t from-home-gradient-top to-home-gradient-bottom w-1/2 h-screen flex items-center justify-center p-16">
        <div>
          <p className="font-Nokora text-white text-7xl">
            Level Up Your Community Through The Power Of Edutainment
          </p>
          <img src={Socials} alt="socials" className="h-16 p-3 mt-10" />
        </div>
      </div>

      {/* transparent-bg */}

      <div className="bg-transparent w-1/2 h-screen flex justify-end items-center overflow-hidden">
        <div className="flex space-x-16 animate-infinite-scroll mt-24">
          <img className="" loading="lazy" src={Scroller} alt="image1" />
          <img className="h-3/4" loading="lazy" src={Scroller2} alt="image2" />
          <img className="h-3/4" loading="lazy" src={Scroller3} alt="image3" />
          <img className="h-3/4" loading="lazy" src={Scroller4} alt="image4" />
          <img className="h-3/4" loading="lazy" src={Scroller5} alt="image5" />
          <img className="h-3/4" loading="lazy" src={Scroller} alt="image1" />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative bg-HomeBg bg-cover bg-center w-full h-screen">
      <Navbar />
      <hr className="border-gray-300 relative top-24" />
      <GradientContainer />
    </div>
  );
};

export default Hero;
