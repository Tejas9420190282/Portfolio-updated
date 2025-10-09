import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function Experience() {
    return (
        <>
            <div id="experience" className="px-4 sm:px-6 lg:px-8">
                <p className="text-[#9D9DA6] font-semibold mt-16 sm:mt-20 lg:mt-28 text-sm sm:text-base text-center">
                    What Skills I Have
                </p>
                <p className="text-[#49A7EC] text-2xl sm:text-3xl mt-2 font-bold text-center">
                    My Experience
                </p>

                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-10 max-w-7xl mx-auto">
                    {/* Frontend Developer Card */}
                    <div className="bg-[#2C2C6C] w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto min-h-96 rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC] transition-all duration-300 p-6 sm:p-8">
                        <p className="text-center text-[#49a7ec] text-lg sm:text-xl font-bold mb-6 sm:mb-8">
                            Frontend Developer
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
                            {/* Left Column */}
                            <div className="space-y-4 sm:space-y-6 text-left">
                                <div className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-[#49A7EC] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg sm:text-xl font-semibold text-white">
                                            HTML
                                        </p>
                                        <p className="text-[#9D9DA6] text-sm font-semibold">
                                            Experience
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-[#49A7EC] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg sm:text-xl font-semibold text-white">
                                            Tailwind
                                        </p>
                                        <p className="text-[#9D9DA6] text-sm font-semibold">
                                            Experience
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-[#49A7EC] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg sm:text-xl font-semibold text-white">
                                            React JS
                                        </p>
                                        <p className="text-[#9D9DA6] text-sm font-semibold">
                                            Intermediate
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-[#49A7EC] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg sm:text-xl font-semibold text-white">
                                            Zustand
                                        </p>
                                        <p className="text-[#9D9DA6] text-sm font-semibold">
                                            Intermediate
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-4 sm:space-y-6 text-left">
                                <div className="flex gap-3 items-start ">
                                    <FaCheckCircle className="text-[#49A7EC] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg sm:text-xl font-semibold text-white">
                                            CSS
                                        </p>
                                        <p className="text-[#9D9DA6] text-sm font-semibold">
                                            Experience
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-[#49A7EC] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg sm:text-xl font-semibold text-white">
                                            JavaScript
                                        </p>
                                        <p className="text-[#9D9DA6] text-sm font-semibold">
                                            Experience
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-[#49A7EC] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg sm:text-xl font-semibold text-white">
                                            React Router
                                        </p>
                                        <p className="text-[#9D9DA6] text-sm font-semibold">
                                            Experience
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Backend Developer Card */}
                    <div className="bg-[#2C2C6C] w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto min-h-96 rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC] transition-all duration-300 p-6 sm:p-8">
                        <p className="text-center text-[#49a7ec] text-lg sm:text-xl font-bold mb-6 sm:mb-8">
                            Backend Developer
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
                            {/* Left Column */}
                            <div className="space-y-4 sm:space-y-6 text-left">
                                <div className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-[#49A7EC] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg sm:text-xl font-semibold text-white">
                                            Node.js
                                        </p>
                                        <p className="text-[#9D9DA6] text-sm font-semibold">
                                            Experience
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-[#49A7EC] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg sm:text-xl font-semibold text-white">
                                            Sequelize
                                        </p>
                                        <p className="text-[#9D9DA6] text-sm font-semibold">
                                            Intermediate
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-[#49A7EC] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg sm:text-xl font-semibold text-white">
                                            MongoDB
                                        </p>
                                        <p className="text-[#9D9DA6] text-sm font-semibold">
                                            Intermediate
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-[#49A7EC] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg sm:text-xl font-semibold text-white">
                                            Core Java
                                        </p>
                                        <p className="text-[#9D9DA6] text-sm font-semibold">
                                            Intermediate
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-4 sm:space-y-6 text-left">
                                <div className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-[#49A7EC] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg sm:text-xl font-semibold text-white">
                                            Express.js
                                        </p>
                                        <p className="text-[#9D9DA6] text-sm font-semibold">
                                            Experience
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-[#49A7EC] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg sm:text-xl font-semibold text-white">
                                            MYSQL
                                        </p>
                                        <p className="text-[#9D9DA6] text-sm font-semibold">
                                            Experience
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-[#49A7EC] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg sm:text-xl font-semibold text-white">
                                            Firebase
                                        </p>
                                        <p className="text-[#9D9DA6] text-sm font-semibold">
                                            Intermediate
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;
