import React, { useContext } from "react";
import hearderImag from "../assets/header_img.png";
import handWave from "../assets/hand_wave.png";
import { AppContext } from "../context/appContext";

const Header = () => {
  const { userData } = useContext(AppContext);
  return (
    <div className=" flex flex-col items-center mt-20 px-4 text-center text-gray-800">
      <img src={hearderImag} className="w-36 h-36 rounded-full mb-6" />
      <h1 className="flex items-center gap-2 text-xl sm:text=3xl font-medium mb-2">
        Hay {userData ? userData.name : "Developer"}{" "}
        <img src={handWave} className="w-8 aspect-square " />
      </h1>
      <h2 className=" text-3xl sm:text-xl"> Welcome to our app </h2>
      <p className="mb-8 max-w-md  ">
        Let's start with a quick product tour and will have you up and running
        in no time
      </p>
      <button className="border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all">
        Get Started
      </button>
    </div>
  );
};

export default Header;
