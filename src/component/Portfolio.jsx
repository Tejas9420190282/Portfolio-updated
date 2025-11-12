/* 
import React from "react";
import ABC from "../assets/ABC.png";
import turf_Finder_img from "../assets/turf_Finder_img.png";
import chat_app_img from "../assets/chat_app_img.png";
import doctor from "../assets/doctor.png";
import airline from "../assets/Airline.png";

import { useNavigate } from "react-router-dom";

function Portfolio() {

    const navigate = useNavigate();

    const handle_Turf_Finder_view_details = () => {
      navigate("/project-turf-finder-details")
    }

    const handle_Chatting_App_Using_Firebase = () => {
      navigate("/project-chatting-app-using-firebase-details")
    }

    const handle_Airline_Reservation_System = () => {
      navigate("/project-airline-reservation-system-details")
    }

    const handle_Doctors_Appointment_System = () => {
      navigate("/project-doctor-appointment-system-details")
    }

    return (
        <>
            <div id="portfolio">
                <p className="text-[#9D9DA6] font-semibold mt-28 text-md flex justify-center items-center">
                    My Recent Work
                </p>
                <p className="text-[#49A7EC] text-3xl mt-2 font-bold flex justify-center">
                    Portfolio
                </p>
                <div className="md:flex mt-10 justify-center items-center md:justify-center md:items-center flex-wrap gap-10">
                    {/* Project 1 
                    <div className="bg-[#2C2C6C]  h-96 w-80 md:w-[390px] md:h-[461px] mt-10 md:mt-0 rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC]">
                        <div className="flex justify-center items-center">
                            <img
                                src={turf_Finder_img}
                                className="h-[200px] w-[250px] mt-7 md:h-[280px] md:w-[320px] rounded-2xl"
                            />
                        </div>
                        <p className="mt-6 text-left ml-8 text-2xl font-bold">
                            Turf Finder
                        </p>
                        <div className="flex justify-center gap-5 mt-5">
                            

                            <button className="bg-[#49A7EC] text-black font-semibold hover:bg-white" onClick={handle_Turf_Finder_view_details}>View Details</button>
                        </div>
                    </div>
                    {/* Project 2 
                    <div className="bg-[#2C2C6C]  h-96 w-80 md:w-[390px] md:h-[461px] mt-14 md:mt-0 rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC]">
                        <div className="flex justify-center items-center">
                            <img
                                src={chat_app_img}
                                className="h-[200px] w-[250px] mt-7 md:h-[280px] md:w-[320px] rounded-2xl"
                            />
                        </div>
                        <div className="flex">
                            <p className="mt-6 text-left ml-8 text-xl font-bold">
                                Chatting app using Firebase
                            </p>
                        </div>

                        <div className="flex justify-center gap-5 mt-5 ">
                            

                            <button className="bg-[#49A7EC] text-black font-semibold hover:bg-white" onClick={handle_Chatting_App_Using_Firebase}>View Details</button>
                        </div>
                    </div>

                    
                </div>


                <div className="md:flex justify-center md:mt-10 gap-10">
                   {/* {/*   Project 3  
                    <div className="bg-[#2C2C6C] h-96 w-80 md:w-[390px] md:h-[461px] mt-10 md:mt-0 rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC]">
                        <div className="flex justify-center items-center">
                            <img
                                src={airline}
                                className="h-[200px] w-[250px] mt-7 md:h-[280px] md:w-[320px] rounded-2xl"
                            />
                        </div>
                        <p className="mt-8 text-left ml-8 text-xl font-bold">
                            Airline Reservation system
                        </p>
                        <div className="flex justify-center gap-5 mt-5">

                            <button className="bg-[#49A7EC] text-black font-semibold hover:bg-white" onClick={handle_Airline_Reservation_System}>View Details</button>
                        </div>
                    </div>

                    {/*   Project 4 
                    <div className="bg-[#2C2C6C] h-96 w-80 md:w-[390px] md:h-[461px] mt-10 md:mt-0 rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC]">
                        <div className="flex justify-center items-center">
                            <img
                                src={doctor}
                                className="h-[200px] w-[250px] mt-7 md:h-[280px] md:w-[320px] rounded-2xl"
                            />
                        </div>
                        <p className="mt-8 text-left ml-8  text-lg lg:text-xl font-bold ">
                            Doctor's Appointment system
                        </p>
                        <div className="flex justify-center gap-5 mt-5">

                            <button className="bg-[#49A7EC] text-black font-semibold hover:bg-white text-center" onClick={handle_Doctors_Appointment_System}>View Details</button>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
}

export default Portfolio;
 */



import React from "react";
import ABC from "../assets/ABC.png";
import turf_Finder_img from "../assets/turf_Finder_img.png";
import chat_app_img from "../assets/chat_app_img.png";
import doctor from "../assets/doctor.png";
import airline from "../assets/Airline.png";

import { useNavigate } from "react-router-dom";

function Portfolio() {
  const navigate = useNavigate();

  const handle_Turf_Finder_view_details = () => {
    navigate("/project-turf-finder-details");
  };

  const handle_Chatting_App_Using_Firebase = () => {
    navigate("/project-chatting-app-using-firebase-details");
  };

  const handle_Airline_Reservation_System = () => {
    navigate("/project-airline-reservation-system-details");
  };

  const handle_Doctors_Appointment_System = () => {
    navigate("/project-doctor-appointment-system-details");
  };

  return (
    <>
      <div id="portfolio" className="px-4 md:px-10 lg:px-20">
        <p className="text-[#9D9DA6] font-semibold mt-28 text-md text-center">
          My Recent Work
        </p>
        <p className="text-[#49A7EC] text-3xl mt-2 font-bold text-center">
          Portfolio
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-10">
          {/* Project 1 */}
          <div className="bg-[#2C2C6C] w-full max-w-[390px] rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC] p-5 flex flex-col items-center transition-all duration-300">
            <img
              src={turf_Finder_img}
              alt="Turf Finder"
              className="w-full h-auto rounded-2xl object-cover"
            />
            <p className="mt-6 text-left w-full text-2xl font-bold">
              Turf Finder
            </p>
            <div className="flex justify-center gap-5 mt-5">
              <button
                className="bg-[#49A7EC] text-black font-semibold hover:bg-white px-4 py-2 rounded-md"
                onClick={handle_Turf_Finder_view_details}
              >
                View Details
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-[#2C2C6C] w-full max-w-[390px] rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC] p-5 flex flex-col items-center transition-all duration-300">
            <img
              src={chat_app_img}
              alt="Chat App"
              className="w-full h-auto rounded-2xl object-cover"
            />
            <p className="mt-6 text-left w-full text-xl font-bold">
              Chatting App using Firebase
            </p>
            <div className="flex justify-center gap-5 mt-5">
              <button
                className="bg-[#49A7EC] text-black font-semibold hover:bg-white px-4 py-2 rounded-md"
                onClick={handle_Chatting_App_Using_Firebase}
              >
                View Details
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-[#2C2C6C] w-full max-w-[390px] rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC] p-5 flex flex-col items-center transition-all duration-300">
            <img
              src={airline}
              alt="Airline Reservation System"
              className="w-full h-auto rounded-2xl object-cover"
            />
            <p className="mt-6 text-left w-full text-xl font-bold">
              Airline Reservation System
            </p>
            <div className="flex justify-center gap-5 mt-5">
              <button
                className="bg-[#49A7EC] text-black font-semibold hover:bg-white px-4 py-2 rounded-md"
                onClick={handle_Airline_Reservation_System}
              >
                View Details
              </button>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-[#2C2C6C] w-full max-w-[390px] rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC] p-5 flex flex-col items-center transition-all duration-300">
            <img
              src={doctor}
              alt="Doctor Appointment System"
              className="w-full h-auto rounded-2xl object-cover"
            />
            <p className="mt-6 text-left w-full text-lg lg:text-xl font-bold">
              Doctor's Appointment System
            </p>
            <div className="flex justify-center gap-5 mt-5">
              <button
                className="bg-[#49A7EC] text-black font-semibold hover:bg-white px-4 py-2 rounded-md"
                onClick={handle_Doctors_Appointment_System}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;