import React from "react";
import { useState } from "react";
import Dropdown from "../components/Normal/Dropdown/Dropdown";
import Navbar from "../components/Normal/Navbar/Navbar";
import HomeSection from "../components/Normal/Main/Home/HomeSection";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuItems = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggleMenuItems={toggleMenuItems} />
      <Dropdown isOpen={isOpen} toggleMenuItems={toggleMenuItems} />
      <HomeSection />
    </div>
  );
};

export default Home;
