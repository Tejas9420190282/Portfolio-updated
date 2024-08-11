import React from "react";

import { FaCheckCircle } from "react-icons/fa";

function Experiance() {
  return (
    <>
      <div id="experiance">
        <p className="text-[#9D9DA6] font-semibold mt-28 text-md flex justify-center">
          What Skills I Have
        </p>
        <p className="text-[#49A7EC] text-3xl mt-2 font-bold flex justify-center">
          My Experience
        </p>

        <div className="flex flex-wrap justify-center md:justify-between mt-10 gap-10 ">
          <div className="bg-[#2C2C6C] h-96 w-80 md:w-[500px] rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC]">
            <p className="flex justify-center mt-10 text-[#49a7ec] text-xl font-bold">
              Frontend Developer
            </p>
            <div className="flex mt-8">
              <ul className="ml-6 md:ml-20">
                <li className="flex gap-2 justify-start ">
                  <FaCheckCircle className="" />
                  <div className="">
                    <p className="text-xl font-semibold flex justify-start">
                      HTML
                    </p>
                    <p className="flex justify-start text-[#9D9DA6] text-sm font-semibold">
                      Experiance
                    </p>
                  </div>
                </li>

                <li className="flex gap-2 justify-start mt-5 md:mt-7">
                  <FaCheckCircle className="" />
                  <div className="">
                    <p className="text-xl font-semibold flex justify-start">
                      Tailwind
                    </p>
                    <p className="flex justify-start text-[#9D9DA6] text-sm font-semibold">
                      Experiance
                    </p>
                  </div>
                </li>

                <li className="flex gap-2 justify-start mt-5 md:mt-6">
                  <FaCheckCircle className="" />
                  <div className="">
                    <p className="text-xl font-semibold flex justify-start">
                      React Js
                    </p>
                    <p className="flex justify-start text-[#9D9DA6] text-sm font-semibold">
                      Intermediate
                    </p>
                  </div>
                </li>
                <li className="flex gap-2 justify-start mt-5 md:mt-5">
                  <FaCheckCircle className="" />
                  <div className="">
                    <p className="text-xl font-semibold flex justify-start text-left">
                      Zustand
                    </p>
                    <p className="flex justify-start text-[#9D9DA6] text-sm font-semibold ">
                      Intermediate
                    </p>
                  </div>
                </li>
                
              </ul>

              <ul className="ml-5 md:ml-20">
                <li className="flex gap-2 justify-start ">
                  <FaCheckCircle className="" />
                  <div className="">
                    <p className="text-xl font-semibold flex justify-start">
                      CSS
                    </p>
                    <p className="flex justify-start text-[#9D9DA6] text-sm font-semibold">
                      Experiance
                    </p>
                  </div>
                </li>

                <li className="flex gap-2 justify-start mt-5 md:mt-8">
                  <FaCheckCircle className="" />
                  <div className="">
                    <p className="text-xl font-semibold flex justify-start">
                      JavaScript
                    </p>
                    <p className="flex justify-start text-[#9D9DA6] text-sm font-semibold">
                      Experiance
                    </p>
                  </div>
                </li>

                <li className="flex gap-2 justify-start mt-5 md:mt-8">
                  <FaCheckCircle className="" />
                  <div className="">
                    <p className="text-xl font-semibold flex justify-start text-left">
                      React-router
                    </p>
                    <p className="flex justify-start text-[#9D9DA6] text-sm font-semibold">
                      Intermediate
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#2C2C6C] h-96 w-80 md:w-[500px] mt-10 md:mt-0 rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC]">
            <p className="flex justify-center mt-10 text-[#49a7ec] text-xl font-bold">
              Backend Developer
            </p>
            <div className="flex mt-10">
              <ul className="ml-6 md:ml-20">
                <li className="flex gap-2 justify-start ">
                  <FaCheckCircle className="" />
                  <div className="">
                    <p className="text-xl font-semibold flex justify-start">
                      Java
                    </p>
                    <p className="flex justify-start text-[#9D9DA6] text-sm font-semibold">
                      Experiance
                    </p>
                  </div>
                </li>

                <li className="flex gap-2 justify-start mt-5 md:mt-8">
                  <FaCheckCircle className="" />
                  <div className="">
                    <p className="text-xl font-semibold flex justify-start">
                      SQL
                    </p>
                    <p className="flex justify-start text-[#9D9DA6] text-sm font-semibold">
                      Internediate
                    </p>
                  </div>
                </li>

                <li className="flex gap-2 justify-start mt-5 md:mt-8">
                  <FaCheckCircle className="" />
                  <div className="">
                    <p className="text-xl font-semibold flex justify-start">
                      Firebase
                    </p>
                    <p className="flex justify-start text-[#9D9DA6] text-sm font-semibold">
                      Internediate
                    </p>
                  </div>
                </li>
              </ul>

              <ul className="ml-5 md:ml-20 ">
                <li className="flex gap-2 justify-start ">
                  <FaCheckCircle className="" />
                  <div className="">
                    <p className="text-xl font-semibold flex justify-start">
                      Node Js
                    </p>
                    <p className="flex justify-start text-[#9D9DA6] text-sm font-semibold">
                      Experiance
                    </p>
                  </div>
                </li>

                <li className="flex gap-2 justify-start mt-5 md:mt-8">
                  <FaCheckCircle className="" />
                  <div className="">
                    <p className="text-xl font-semibold flex justify-start">
                      MongoDB
                    </p>
                    <p className="flex justify-start text-[#9D9DA6] text-sm font-semibold">
                      Intermediate
                    </p>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiance;
