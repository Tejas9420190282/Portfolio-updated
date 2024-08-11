import React from "react";

import { IoCheckmarkDone } from "react-icons/io5";

function Services() {
  return (
    <>
      <div id="services">
        <p className="text-[#9D9DA6] font-semibold mt-28 text-md flex justify-center">
          What I Offer
        </p>
        <p className="text-[#49A7EC] text-3xl mt-2 font-bold flex justify-center">
          Services
        </p>

        <div className="flex justify-center">
          <div className="h-80 w-80 md:w-96  bg-[#2C2C6C]  rounded-b-xl mt-10 border-2 border-[#49A7EC] hover:bg-[#1b1b31] ">
            <div className="bg-[#49A7EC] h-24 w-80 md:w-96 rounded-b-3xl flex justify-center items-center">
              <p className="text-black font-semibold text-xl">Web Development</p>
            </div>
            <ul className="">
              <li className="flex justify-start md:justify-center  mt-8 gap-2 ml-14 md:ml-0">
                <IoCheckmarkDone className="text-[#49A7EC] " />
                <p>Frontend Development</p>
              </li>

              <li className="flex justify-start mt-5 gap-2 ml-14 md:justify-center md:ml-0">
                <IoCheckmarkDone className="text-[#49A7EC] " />
                <p>Backend Development</p>
              </li>

              <li className="flex justify-start mt-5 gap-2 ml-14 md:justify-center md:mr-32">
                <IoCheckmarkDone className="text-[#49A7EC] " />
                <p>Web Hosting</p>
              </li>

              <li className="flex justify-start mt-5 gap-2 ml-14 md:justify-center md:ml-0">
                <IoCheckmarkDone className="text-[#49A7EC] " />
                <p>Database Development</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
