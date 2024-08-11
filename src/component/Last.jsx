import React from "react";

import { SiCodesignal } from "react-icons/si";

import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

function Last() {

  const handleInstaClick = () => {

    const instagramUrl = 'https://www.instagram.com/tejas_shimpi_2001?igsh=c2xodHA4a3lkNnJi'; // Replace with the actual Instagram URL
    window.open(instagramUrl, '_blank');
  }  

  const handleLinkdinClick = () => {

    const linkdinUrl = "https://www.linkedin.com/in/tejas-shimpi-459235206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"; // Replace with the actual Instagram URL
    window.open(linkdinUrl, '_blank');
  }

  const handleGitClick = () => {

    const gitUrl = "https://github.com/Tejas9420190282"; // Replace with the actual Instagram URL
    window.open(gitUrl, '_blank');
  }

  return (
    <>
      <div className="bg-[#49A7EC] w-auto h-[700px] md:h-[430px] mt-10">
        <div className="pt-10 ">
          <SiCodesignal className="text-[#2C2C6C] text-7xl mx-auto hover:text-white" />
        </div>

        <div className=" text-[#2C2C6C] font-medium text-xl md:flex md:justify-center md:flex-col md:text-lg">
          <ul className="md:flex md:justify-center md:gap-5 ">
            <a href="#home" className="text-[#2C2C6C]"><li className=" hover:text-white cursor-pointer md:mt-8 " >Home</li></a>
            <a href="#about" className="text-[#2C2C6C]"><li className="mt-8 hover:text-white cursor-pointer">About</li></a>
            <a href="#experiance" className="text-[#2C2C6C]"><li className="mt-8 hover:text-white cursor-pointer">Experience</li></a>
            <a href="#services" className="text-[#2C2C6C]"><li className="mt-8 hover:text-white cursor-pointer">Services</li></a>
            <a href="#portfolio" className="text-[#2C2C6C]"><li className="mt-8 hover:text-white cursor-pointer">Portfolio</li></a>
            <a href="#contact" className="text-[#2C2C6C]"><li className="mt-8 hover:text-white cursor-pointer">Contact</li></a>
          </ul>
        </div>

        <div className=" flex justify-center items-center gap-5 mt-10 ">
          <div className="h-[50px] w-[50px] bg-[#2C2C6C] flex justify-center items-center rounded-xl md:h-[40px] md:w-[40px] cursor-pointer" onClick={handleGitClick}>
            <FaSquareGithub className="text-3xl rounded-full md:text-xl cursor-pointer" />
          </div>

          <div className="h-[50px] w-[50px] bg-[#2C2C6C] flex justify-center items-center rounded-xl md:h-[40px] md:w-[40px] cursor-pointer" onClick={handleLinkdinClick}>
            <FaLinkedin className="text-3xl md:text-xl " />
          </div>

          <div className="h-[50px] w-[50px] bg-[#34346d] flex justify-center items-center rounded-xl md:h-[40px] md:w-[40px] cursor-pointer" onClick={handleInstaClick}>
            <IoLogoInstagram className="text-3xl md:text-xl "  />
          </div>
        </div>

        <p className="text-center text-[10px] mt-8 text-[#34346d]">
          © Tejas Shimpi. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Last;
