// Turf_Finder_Project_Details.jsx

import turf_Finder_img from "../assets/turf_Finder_img.png";

import React from 'react';
import {
  User,
  Search,
  CreditCard,
  FileText,
  RotateCcw,
  Smartphone,
  Settings,
  BarChart2,
  Users,
  Target,
  Github,
  Linkedin,
  Globe,
} from 'lucide-react';

// Reusable Button Component
const ActionButton = ({ label, icon: Icon, onClick, bgColor, hoverBgColor, textColor = 'text-white' }) => (
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

// Main App Component
const Turf_Finder_Project_Details = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen shadow-2xl  bg-[#2C2C6C]  rounded-3xl  text-white font-sans  lg:p-4 sm:p-10 flex flex-col items-center hover:bg-[#1F1F38] hover:border-4 hover:border-[#49A7EC]">
      <div className="w-full max-w-6xl p-6 md:p-12    ">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-cyan-400 mb-2">
          🏏⚽ Turf Finder
        </h2>
        <p className="text-center text-gray-400 mb-12 text-sm sm:text-base">
          A full-stack solution for managing and booking sports turf.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={turf_Finder_img}
              alt="Turf Finder Screenshot"
              className="rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-transform duration-300 hover:scale-105 max-w-full h-auto"
            />
          </div>

          {/* Info & Buttons Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="bg-slate-800 p-6 sm:p-8 rounded-xl border border-slate-700">
              
              <h3 className="text-2xl font-bold mb-6  text-gray-50">
                🏏⚽ Turf Management System
              </h3>

              <p>

A modern, full-stack web application for managing turf bookings online. This system provides a seamless experience for users to discover, book, and manage turf reservations, while giving administrators powerful tools to manage facilities and bookings.</p>
              
              <h3 className="text-2xl font-bold mb-6 mt-10 text-gray-50">
                ✨ Key Features
              </h3>
              <div className="space-y-5 text-left">
                <InfoItem
                  icon={Target}
                  text={
                    <span>
                      <strong className="text-gray-50">Tech Stack:</strong> React.js, Node.js, Express.js, MySQL, TailwindCSS
                    </span>
                  }
                />
                <InfoItem icon={User} text="Secure User Authentication (JWT + email verification)" />
                <InfoItem icon={Search} text="Advanced search by location, date, and availability" />
                <InfoItem icon={CreditCard} text="Integrated payment processing with Razorpay" />
                <InfoItem icon={FileText} text="PDF entry pass generation and download" />
                <InfoItem icon={RotateCcw} text="Password reset via email" />
                <InfoItem icon={Smartphone} text="Fully responsive design for all devices" />
              </div>

              <h4 className="text-xl font-bold mt-8 mb-4 text-cyan-400">
                ⚙️ Admin Features
              </h4>
              <div className="space-y-5 text-left">
                <InfoItem icon={Settings} text="Complete turf management (CRUD operations)" />
                <InfoItem icon={BarChart2} text="Booking overview with filtering capabilities" />
                <InfoItem icon={Users} text="User management system" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-5 gap-5">
              <ActionButton
                label="GitHub"
                icon={Github}
                onClick={() => openLink("https://github.com/Tejas9420190282/Host--Turf-Managment-System-Project---MYSQL2")}
                bgColor="bg-gray-600"
                hoverBgColor="hover:bg-gray-700"
              />
              <ActionButton
                label="Live Demo"
                icon={Globe}
                onClick={() => openLink("https://turf-finder-project.netlify.app/")}
                bgColor="bg-teal-600"
                hoverBgColor="hover:bg-teal-600"
              />
              <ActionButton
                label="Backend API Docs"
                icon={FileText}
                onClick={() => openLink("https://documenter.getpostman.com/view/40699331/2sAYkHoJ7h")}
                bgColor="bg-indigo-500"
                hoverBgColor="hover:bg-indigo-500"
              />
              <ActionButton
                label="LinkedIn"
                icon={Linkedin}
                onClick={() => openLink("https://www.linkedin.com/posts/tejas-shimpi-459235206/reactjs-nodejs-tailwindcss-activity-7309447974818897920-8gxP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRcD0UBPNVebS3NtCgLNQLXyWoK2-ZlglA")}
                bgColor="bg-[#0A66C2]"
                hoverBgColor="hover:bg-[#0A66C2]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turf_Finder_Project_Details;
