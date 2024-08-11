import React from 'react'

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import hii from "../assets/hii.webp"
import cv from "../assets/Tejas_Shimpi_CV.pdf"

function Hii() {

    const handleInstaClick = () => {

        const instagramUrl = 'https://www.instagram.com/tejas_shimpi_2001?igsh=c2xodHA4a3lkNnJi'; // Replace with the actual Instagram URL
        window.open(instagramUrl, '_blank');
    }  
    
    const handleLinkdinClick = () => {
    
        const linkdinUrl = "https://www.linkedin.com/in/tejas-shimpi-459235206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"; // Replace with the actual Instagram URL
        window.open(linkdinUrl, '_blank');
    }
    
    const handleGitClick = () => {
    
        const gitUrl = "https://github.com/Tejas9420190282"; // Replace with the actual Instagram URL
        window.open(gitUrl, '_blank');
    }

    return (
        <>
            <div className='overflow-hidden' id='home'>
                <div>
                    <p className='flex justify-center font-bold'>Hello I'm</p>
                    <h1 className='flex justify-center font-bold mt-3'>Tejas Shimpi</h1>
                    <p className='flex justify-center text-[#9D9DA6] font-bold mt-3'>Web Developer</p>
                </div>
                <div className='flex justify-center mt-6 gap-8'>
                    <a href={cv} download ><button className='bg-[#1B1B31] text-[#49A7EC] border-[#49A7EC] font-semibold hover:bg-white hover:text-black hover:border-none'>Download CV</button></a>
                    <a href="#contact"><button  className='bg-[#49A7EC] text-black font-semibold hover:bg-white ' >Let's talk</button></a>
                </div>
                <div className='mt-28 md:flex md:justify-between md:items-center'>
                    <div className='hidden md:flex md:flex-col md:justify-center md:gap-3 mr-10 '>
                        <FaInstagram className='text-2xl text-[#49A7EC]  cursor-pointer bg-[#1B1B31]' onClick={handleInstaClick} />
                        <FaLinkedin className='text-2xl text-[#49A7EC] cursor-pointe bg-[#1B1B31]' onClick={handleLinkdinClick} />
                        <FaSquareGithub className='text-2xl text-[#49A7EC] cursor-pointer bg-[#1B1B31]' onClick={handleGitClick} />
                    </div>
                    <div className='flex justify-center items-center md:ml-36'>
                        <div className='bg-[#49A7EC] h-[300px] w-[300px] flex justify-center rounded-t-full'>
                            <img src={hii} className='h-[300px] pt-4 flex justify-center'/>
                        </div>
                    </div>
                    <div className=' hidden md:visible md:flex  md:rotate-90 tracking-[8px]'>
                        <p className='font-semibold text-[#49A7EC]  '>Scroll down</p>
                    </div>
                </div>
            </div>            
        </>    
    )
}

export default Hii
