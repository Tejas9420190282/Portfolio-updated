
import React from "react";
import ABC from "../assets/ABC.png";
import turf_Finder_img from "../assets/turf_Finder_img.png";
import chat_app_img from "../assets/chat_app_img.png";
import doctor from "../assets/doctor.png";

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
                    {/* Project 1 */}
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
                    {/* Project 2 */}
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
                   {/* {/*   Project 3  */}
                    <div className="bg-[#2C2C6C] h-96 w-80 md:w-[390px] md:h-[461px] mt-10 md:mt-0 rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC]">
                        <div className="flex justify-center items-center">
                            <img
                                src={ABC}
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

                    {/*   Project 4 */}
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
