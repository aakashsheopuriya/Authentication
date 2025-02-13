import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <div className="flex flex-col  min-h-screen bg-[url('/bg_img.png')] bg-cover bg-center">
        <Navbar />
        <Header />
      </div>
    </>
  );
};

export default Home;
