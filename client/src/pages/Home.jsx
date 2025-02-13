import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import axios from "axios";
import { AppContext } from "../context/appContext";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const { backendUrl } = useContext(AppContext);

  const getUserData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(backendUrl + "/api/user/data");
      if (data) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-16 h-16 border-4 border-t-transparent border-b-transparent border-black rounded-full animate-spin"></div>
      </div>
    );
  }

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
