import React, { useState } from "react";

import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import cv from "../assets/Tejas_Shimpi_CV.pdf"

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailClick = () => {
    window.location.href = "mailto:tejasshimpi87@gmail.com";
  };

  const handleLinkedinClick = () => {
    const linkedInUrl =
      "https://www.linkedin.com/in/tejas-shimpi-459235206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
    window.open(linkedInUrl, "_blank");
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "9420190282"; // Replace with the actual phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = () => {
    const whatsappNumber = "9420190282";
    const text = `Name : ${name} \n Email : ${email} \n Message : ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");

    alert("Thank you for contact me!");
  };

  return (
    <>
      <div className="" id="contact">
        <p className="text-[#9D9DA6] font-semibold mt-28 text-md flex justify-center">
          Get In Touch
        </p>
        <p className="text-[#49A7EC] text-3xl mt-2 font-bold flex justify-center">
          Contact Me
        </p>

        <div className="md:flex md:gap-24">
          <div className="">
            <div className="w-80 h-40 mx-auto md:mx-0 mt-10 rounded-2xl bg-[#2C2C6C] md:h-32 hover:bg-[#1b1b31] hover:border-2 hover:border-[#49A7EC]">
              <div className="pt-5  md:pt-3 flex justify-center">
                <MdOutlineMail className=" text-3xl " />
              </div>
              <p className="mt-1  text-2xl font-bold md:text-base md:mt-1">
                Email
              </p>
              <p className="font-semibold text-xl mt-1 md:text-sm md:mt-1">
                tejasshimpi877@gmail.com
              </p>
              <p
                className="mt-2 text-[#49A7EC] text-lg cursor-pointer md:mt-0"
                onClick={handleEmailClick}
              >
                send a message
              </p>
            </div>

            <div className="w-80 h-44 mx-auto md:mx-0 mt-10 rounded-2xl bg-[#2C2C6C] md:h-32 hover:bg-[#1b1b31] hover:border-2 hover:border-[#49A7EC]">
              <div className="pt-5 md:pt-3 flex justify-center">
                <FaLinkedin className=" text-3xl" />
              </div>
              <p className="mt-2 text-2xl font-bold md:text-base md:mt-1">
                Linkedin
              </p>
              <p className="font-semibold text-xl mt-2 md:text-sm md:mt-1">
                Tejas Shimpi
              </p>
              <p
                className="mt-2 text-[#49A7EC] text-lg cursor-pointer md:mt-0"
                onClick={handleLinkedinClick}
              >
                send a message
              </p>
            </div>

            <div className="w-80 h-44 mx-auto md:mx-0 mt-10 rounded-2xl bg-[#2C2C6C] md:h-32 hover:bg-[#1b1b31] hover:border-2 hover:border-[#49A7EC]">
              <div className="pt-5 md:pt-3 flex justify-center">
                <FaWhatsapp className=" text-3xl" />
              </div>
              <p className="mt-2 text-2xl font-bold md:text-base md:mt-1">
                WhatsApp
              </p>
              <p className="font-semibold text-xl mt-2 md:text-sm md:mt-1">
                +91 9420190282
              </p>
              <p
                className="mt-2 text-[#49A7EC] text-lg cursor-pointer md:mt-0"
                onClick={handleWhatsAppClick}
              >
                send a message
              </p>
            </div>
          </div>

          <div>
            <div className="h-16 w-80 md:h-14 md:w-[600px] bg-[#242424] mx-auto mt-10 flex justify-center items-center rounded-xl border-2 border-[#49A7EC] ">
              <input
                type="input"
                value={name}
                className="h-10 w-72 md:w-[570px] bg-[#242424] outline-none "
                placeholder="Your Full Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="h-16 w-80 md:h-14 md:w-[600px] bg-[#242424] mx-auto mt-5 flex justify-center items-center rounded-xl border-2 border-[#49A7EC] ">
              <input
                type="email"
                value={email}
                className="h-10 w-72 md:w-[570px] bg-[#242424] outline-none"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="h-64 w-80 md:h-48 md:w-[600px] bg-[#242424] mx-auto mt-5 flex justify-center items-center rounded-xl border-2 border-[#49A7EC] ">
              <textarea
                rows="5"
                value={message}
                placeholder="Enter message"
                className="resize-none outline-none h-56 w-72 md:h-40 md:w-[570px] bg-[#242424]"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="flex justify-center items-center mt-10 gap-3">
              <div
                className="h-12 w-36 flex justify-center items-center  text-black font-semibold rounded-lg mx-auto md:mx-0 bg-[#49A7EC] cursor-pointer hover:bg-white"
                onClick={handleSubmit}
              >
                Send Message
              </div>
              <a href={cv} download ><button className='bg-[#1B1B31] text-[#49A7EC] border-[#49A7EC] font-semibold hover:bg-white hover:text-black hover:border-none '>Download CV</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
