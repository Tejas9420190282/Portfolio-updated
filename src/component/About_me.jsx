import React from "react";
import about_me from "../assets/about_me.webp";
import { IoSchoolSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";

function About_me() {
  return (
    <>
      <div id="about">
        <div className="mt-28">
          <p className="text-[#9D9DA6] flex justify-center font-bold">
            Get to Know
          </p>
          <p className="text-[#49A7EC] flex justify-center font-semibold text-3xl">
            About ME
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between mt-10 gap-16">
          <div>
            <div className="flex justify-center items-center md:justify-center ">
              <img
                src={about_me}
                className="rounded-3xl h-72 w-72  md:w-96 md:h-96"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap justify-center items-center gap-5 ">
              <div className="bg-[#2C2C6C] h-[170px] w-[170px] rounded-3xl hover:border-2 hover:bg-[#1f1f38] hover:border-[#49A7EC]">
                <div className="flex justify-center text-3xl mt-5 ">
                  <IoSchoolSharp />
                </div>
                <p className="font-semibold mt-5 text-">Qualification</p>
                <p className="font-semibold text-[#9D9DA6] text-xl mt-3">MSc (CS)</p>
              </div>
              <div className="bg-[#2C2C6C] h-[170px] w-[170px] rounded-3xl hover:border-2 hover:bg-[#1f1f38] hover:border-[#49A7EC]">
                <div className="flex justify-center text-3xl mt-5">
                  <FaShoppingBag />
                </div>
                <p className="font-semibold mt-5 text-">Experience</p>
                <p className="font-semibold text-[#9D9DA6]">Freshers</p>
              </div>
              <div className="bg-[#2C2C6C] h-[170px] w-[170px] rounded-3xl hover:border-2 hover:bg-[#1f1f38] hover:border-[#49A7EC]">
                <div className="flex justify-center text-3xl mt-5">
                  <IoStatsChartSharp />
                </div>
                <p className="font-semibold mt-5 ">Project</p>
                <p className="font-semibold text-[#9D9DA6]">3</p>
              </div>
            </div>

            <div className="h-64 md:h-44 md:w-[550px] md:text-left text-center mt-10 ">
              <p className="flex flex-wrap">
                Hi ! <br />I am Tejas Shimpi, a web designer/developer focused
                on crafting great web experiences. Designing and Coding have
                been my passion since the days I started working with computers
                but I found myself in love with web design / development. I
                enjoy creating beautifully designed, intuitive and functional
                websites.
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <a href="#contact" className="text-black"><button className="bg-[#49A7EC] h-10 w-28 flex justify-center items-center font-semibold rounded hover:bg-white hover:text-black">
                Lets Talk
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_me;

/*  
            

            <div>
                <div className=''></div>
            </div>
*/
