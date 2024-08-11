import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiFillProject } from "react-icons/ai";
import { BiBook, BiMessageAltDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

function Nav() {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <div className="flex justify-center items-center z-10">
      <nav
        className="bg-white h-16 w-100 md:h-20 md:w-[480px] flex justify-center items-center md:gap-5 fixed bottom-[30px] rounded-full"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <a href="#home" onClick={() => setActiveNav("#home")} className="">
          <div
            className={`p-3 hover:rounded-full ${
              activeNav === "#home" ? "bg-blue-500" : "bg-transparent"
            } rounded-full`}
          >
            <AiOutlineHome className="text-white text-3xl" />
          </div>
        </a>

        <a href="#about" onClick={() => setActiveNav("#about")} className="ab">
          <div
            className={`p-3 hover:rounded-full ${
              activeNav === "#about" ? "bg-blue-500" : "bg-transparent"
            } rounded-full`}
          >
            <AiOutlineUser className="text-white text-3xl" />
          </div>
        </a>

        <a
          href="#experiance"
          onClick={() => setActiveNav("#experiance")}
          className="ab"
        >
          <div
            className={`p-3 hover:rounded-full ${
              activeNav === "#experiance" ? "bg-blue-500" : "bg-transparent"
            } rounded-full`}
          >
            <BiBook className="text-white text-3xl" />
          </div>
        </a>

        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className="ab"
        >
          <div
            className={`p-3 hover:rounded-full ${
              activeNav === "#services" ? "bg-blue-500" : "bg-transparent"
            } rounded-full`}
          >
            <RiServiceLine className="text-white text-3xl" />
          </div>
        </a>

        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className="ab"
        >
          <div
            className={`p-3 hover:rounded-full ${
              activeNav === "#portfolio" ? "bg-blue-500" : "bg-transparent"
            } rounded-full`}
          >
            <BiMessageAltDetail className="text-white text-3xl" />
          </div>
        </a>

        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className="ab"
        >
          <div
            className={`p-3 hover:rounded-full ${
              activeNav === "#contact" ? "bg-blue-500" : "bg-transparent"
            } rounded-full`}
          >
            <AiFillProject className="text-white text-3xl " />
          </div>
        </a>
      </nav>
    </div>
  );
}

export default Nav;

/* 
import React, { useState } from "react";
import "./Nav.css"

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageAltDetail } from "react-icons/bi";
import { AiFillProject } from "react-icons/ai";

function Nav() {
  const [activeNav, setActiveNav] = useState(`#home`);

  return (
    <>
      <div className="flex justify-center items-center z-10 ">
        <nav className="bg-white h-16 w-100 md:h-20 md:w-[480px] flex justify-center items-center md:gap-5 fixed bottom-[30px] rounded-full " style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
          <a href="#home" className="ab">
            <div className=" p-3   hover:rounded-full bg-transparent ab" >
              <AiOutlineHome className="text-white text-3xl ab" />
            </div>
          </a>

          <a href="#about" className="ab" >
            <div className="p-3 hover:rounded-full  bg-transparent ab">
              <AiOutlineUser className="text-white text-3xl ab" />
            </div>
          </a>

          <a href="#experiance" className="ab" >
            <div className=" p-3 hover:rounded-full flex justify-center items-center  bg-transparent ab">
              <BiBook className="text-white text-3xl ab" />
            </div>
          </a>

          <a href="#services" className="ab">
            <div className=" p-3 hover:rounded-full bg-transparent ab">
              <RiServiceLine className="text-white text-3xl ab" />
            </div>
          </a>

          <a href="#portfolio" className="ab">
            <div className=" p-3 hover:rounded-full  bg-transparent ab">
              <BiMessageAltDetail className="text-white text-3xl ab" />
            </div>
          </a>

          <a href="#contact" className="ab">
            <div className=" p-3 hocus:rounded-full  bg-transparent ab">
              <AiFillProject className="text-white text-3xl ab" />
            </div>
          </a>

        </nav>
      </div>
    </>
  );
}

export default Nav;
 */
