import { IoIosMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCopyright } from "react-icons/fa";



const Footer = () => {
return (
    <div className="flex flex-col mt-[0px] lg:mt-[90px] md:mt-[85px] md:bg-blue-950 md:text-white md:h-fit pt-5 space-y-3 ">

        <div className=" flex justify-center space-x-5">

            <a href="mailto:ayobaj007@gmail.com" className="buttons">
                <button className=" bg-gradient-to-r bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <IoIosMail className="text-2xl"/>
                </button>
            </a>

            <a href="https://github.com/ayobaj" className="buttons">
                <button className=" bg-gradient-to-r bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <IoLogoGithub className="text-2xl"/>
                </button>
            </a>

            <a href="https://www.instagram.com/ayo.baj/" className="buttons">
                <button className=" bg-gradient-to-r bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <FaInstagram className="text-2xl"/>
                </button>
            </a>

            <a href="https://www.linkedin.com/in/ayomide-bajulaye/" className="buttons">
                <button className=" bg-gradient-to-r bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <FaLinkedin className="text-2xl"/>
                </button>
            </a>

            <a href="https://twitter.com/ayo_baj_" className="buttons">
                <button className=" bg-gradient-to-r bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <FaXTwitter className="text-2xl"/>
                </button>
            </a>

        </div>

        <div className="flex items-center justify-center">
            <FaCopyright/> | Coded & Designed by ayomide bajulaye @2024
        </div>

    </div>
    )
}

export default Footer
