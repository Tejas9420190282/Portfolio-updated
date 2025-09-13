// Chatting_App_Using_Firebase_Project_Details.jsx

// https://github.com/Tejas9420190282/React_Chat_App_Project_Using_Firebase

// https://chats-app-project.netlify.app/

import chat_app_img from "../assets/chat_app_img.png";

import React from "react";

import {
    Lock,
    Target,
    Github,
    Linkedin,
    Globe,
    Droplet,
    Mail,
    UserPen,
    TabletSmartphone
} from "lucide-react";

// Reusable Button Component
const ActionButton = ({
    label,
    icon: Icon,
    onClick,
    bgColor,
    hoverBgColor,
    textColor = "text-white",
}) => (
    <button
        onClick={onClick}
        // Button container with group, transition, and responsive styling
        className={`group relative flex items-center justify-center gap-2 rounded-xl shadow-lg font-semibold
      ${textColor} ${bgColor} ${hoverBgColor}
      transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl
      w-full text-sm sm:text-base
      // Desktop-specific styling
      lg:w-28 lg:h-16  lg:hover:w-auto lg:hover:rounded-xl`}
    >
        <div className="flex items-center justify-center gap-2 lg:group-hover:opacity-100 transition-opacity duration-300">
            {/* Icon is always visible */}
            {Icon && <Icon size={18} className="flex-shrink-0" />}
            {/* Label is hidden on desktop by default and revealed on hover */}
            <span className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:opacity-0 lg:group-hover:relative lg:group-hover:top-auto lg:group-hover:left-auto lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap lg:inline-block">
                {label}
            </span>
        </div>
    </button>
);

// Individual Info Item Component
const InfoItem = ({ icon: Icon, text }) => (
    <div className="flex items-start space-x-3">
        <div className="text-cyan-400 text-xl mt-1 flex-shrink-0">
            <Icon size={20} />
        </div>
        <p className="text-gray-200 text-sm sm:text-base">{text}</p>
    </div>
);

function Chatting_App_Using_Firebase_Project_Details() {
    const openLink = (url) => {
        window.open(url, "_blank");
    };

    return (
        <>
            <div className="min-h-screen shadow-2xl  bg-[#2C2C6C]  rounded-3xl  text-white font-sans p-4 sm:p-10 flex flex-col items-center hover:bg-[#1F1F38] hover:border-4 hover:border-[#49A7EC]">
                <div className="w-full max-w-6xl p-6 md:p-12    ">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-cyan-400 mb-2">
                        🗨️ React Chat App with Firebase

                    </h2>
                    <p className="text-center text-gray-400 mb-12 text-sm sm:text-base">
                        
                        
                    </p>

                    <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start gap-12">
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                src={chat_app_img}
                                alt="Turf Finder Screenshot"
                                className="rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-transform duration-300 hover:scale-105 max-w-full h-auto"
                            />
                        </div>

                        {/* Info & Buttons Section */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-8">
                            <div className="bg-slate-800 p-6 sm:p-8 rounded-xl border border-slate-700">
                                <h3 className="text-2xl font-bold mb-6  text-gray-50">
                                    🗨️ React Chat App with Firebase
                                </h3>

                                <p>
                                    A real-time chat application built using
                                    React, Firebase Authentication, and
                                    Firestore. This project demonstrates how to
                                    implement user authentication, real-time
                                    messaging, and responsive UI using modern
                                    web technologies.
                                </p>

                                <h3 className="text-2xl font-bold mb-6 mt-10 text-gray-50">
                                    📌 Key Features
                                </h3>
                                <div className="space-y-5 text-left">
                                    <InfoItem
                                        icon={Target}
                                        text={
                                            <span>
                                                <strong className="text-gray-50">
                                                    Tech Stack:
                                                </strong>{" "}
                                                React.js, TailwindCSS, Firebase
                                            </span>
                                        }
                                    />
                                    <InfoItem
                                        icon={Lock}
                                        text={
                                            <span>
                                                <strong className="text-gray-50">
                                                    User Authentication:
                                                </strong>{" "}
                                                Secure login and registration
                                                using Firebase Authentication.
                                            </span>
                                        }
                                    />

                                    <InfoItem
                                        icon={TabletSmartphone}
                                        text={
                                            <span>
                                                <strong className="text-gray-50">
                                                    Responsive Design:
                                                </strong>{" "}
                                                Optimized for desktop, tablet,
                                                and mobile devices.
                                            </span>
                                        }
                                    />
                                    <InfoItem
                                        icon={UserPen}
                                        text={
                                            <span>
                                                <strong className="text-gray-50">
                                                    User Profiles:
                                                </strong>{" "}
                                                Personalized user profiles with
                                                display names and avatars.
                                            </span>
                                        }
                                    />

                                    <InfoItem
                                        icon={Mail}
                                        text={
                                            <span>
                                                <strong className="text-gray-50">
                                                    Message Persistence:
                                                </strong>{" "}
                                                Messages are stored and
                                                retrieved using Firebase
                                                Firestore.
                                            </span>
                                        }
                                    />

                                    <InfoItem
                                        icon={Droplet}
                                        text={
                                            <span>
                                                <strong className="text-gray-50">
                                                    Modern UI:
                                                </strong>{" "}
                                                Clean and user-friendly
                                                interface built with Tailwind
                                                CSS.
                                            </span>
                                        }
                                    />
                                </div>

                                <h4 className="text-xl font-bold mt-8 mb-4 text-cyan-400">
                                    🛠️ Technologies Used
                                </h4>
                                <div className="space-y-5">
                                    <InfoItem
                                        icon={Target}
                                        text={
                                            <span>
                                                <strong className="text-gray-50">
                                                    Frontend:
                                                </strong>{" "}
                                                React.js
                                            </span>
                                        }
                                    />
                                    <InfoItem
                                        icon={Target}
                                        text={
                                            <span>
                                                <strong className="text-gray-50">
                                                    Backend:
                                                </strong>{" "}
                                                Firebase (Authentication &
                                                Firestore)
                                            </span>
                                        }
                                    />
                                    <InfoItem
                                        icon={Target}
                                        text={
                                            <span>
                                                <strong className="text-gray-50">
                                                    Styling:
                                                </strong>{" "}
                                                Tailwind CSS
                                            </span>
                                        }
                                    />
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row sm:space-x-5 gap-5">
                                <ActionButton
                                    label="GitHub"
                                    icon={Github}
                                    onClick={() =>
                                        openLink(
                                            "https://github.com/Tejas9420190282/React_Chat_App_Project_Using_Firebase"
                                        )
                                    }
                                    bgColor="bg-gray-600"
                                    hoverBgColor="hover:bg-gray-700"
                                />
                                <ActionButton
                                    label="Live Demo"
                                    icon={Globe}
                                    onClick={() =>
                                        openLink(
                                            " https://chats-app-project.netlify.app/"
                                        )
                                    }
                                    bgColor="bg-teal-600"
                                    hoverBgColor="hover:bg-teal-600"
                                />
                                {/* <ActionButton
                                    label="Backend API Docs"
                                    icon={FileText}
                                    onClick={() =>
                                        openLink(
                                            ""
                                        )
                                    }
                                    bgColor="bg-indigo-500"
                                    hoverBgColor="hover:bg-indigo-500"
                                /> */}
                                <ActionButton
                                    label="LinkedIn"
                                    icon={Linkedin}
                                    onClick={() =>
                                        openLink(
                                            "https://www.linkedin.com/posts/tejas-shimpi-459235206_react-css-webdevelopment-activity-7228639205122293760-OGow?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRcD0UBPNVebS3NtCgLNQLXyWoK2-ZlglA"
                                        )
                                    }
                                    bgColor="bg-[#0A66C2]"
                                    hoverBgColor="hover:bg-[#0A66C2]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chatting_App_Using_Firebase_Project_Details;
